import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { Employee } from "@/types/employee";

const schema = z.object({
  name: z.string().min(1, "現場名は必須です"),
  contractor: z.string().min(1, "工務店名は必須です"),
  postalCode: z.string().optional(),
  prefecture: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  date: z.string().min(1, "現場日は必須です"),
  startTime: z.string().min(1, "開始時刻は必須です"),
  notes: z.string().optional(),
  employeeNames: z.string().optional(),
});

type FormValues = z.infer<typeof schema>;

type Props = {
  defaultValues?: Partial<FormValues>;
  onSubmit: (values: FormValues) => void;
  submitting?: boolean;
};

export function SiteForm({ defaultValues, onSubmit, submitting }: Props) {
  const [clients, setClients] = useState<{ id: string; name: string }[]>([]);
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [contractorInput, setContractorInput] = useState("");
  const [contractorSelect, setContractorSelect] = useState("");
  const [selectedEmployees, setSelectedEmployees] = useState<Employee[]>([]);
  const [employeeSearch, setEmployeeSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      ...defaultValues,
      employeeNames: defaultValues?.employeeNames || "",
    },
  });

  // 取引先リスト取得
  useEffect(() => {
    fetch("/api/clients")
      .then((res) => res.json())
      .then((data) => setClients(data));
  }, []);

  // 従業員リスト取得
  useEffect(() => {
    fetch("/api/employees")
      .then((res) => res.json())
      .then((data) => setEmployees(data));
  }, []);

  // 従業員検索フィルタリング
  useEffect(() => {
    if (employeeSearch.trim() === "") {
      setFilteredEmployees(
        employees.filter(
          (emp) => !selectedEmployees.some((selected) => selected.id === emp.id)
        )
      );
    } else {
      setFilteredEmployees(
        employees.filter(
          (emp) =>
            emp.name.toLowerCase().includes(employeeSearch.toLowerCase()) &&
            !selectedEmployees.some((selected) => selected.id === emp.id)
        )
      );
    }
  }, [employeeSearch, employees, selectedEmployees]);

  // 工務店名の同期
  useEffect(() => {
    if (contractorSelect) {
      setValue("contractor", contractorSelect);
    } else if (contractorInput) {
      setValue("contractor", contractorInput);
    }
  }, [contractorSelect, contractorInput, setValue]);

  // 従業員選択処理
  const handleEmployeeSelect = (employee: Employee) => {
    setSelectedEmployees([...selectedEmployees, employee]);
    setEmployeeSearch("");
    // フォームの値も更新
    const employeeNames = [...selectedEmployees, employee]
      .map((emp) => emp.name)
      .join(", ");
    setValue("employeeNames", employeeNames);
  };

  // 従業員削除処理
  const handleEmployeeRemove = (employeeId: string) => {
    const updatedEmployees = selectedEmployees.filter(
      (emp) => emp.id !== employeeId
    );
    setSelectedEmployees(updatedEmployees);
    const employeeNames = updatedEmployees.map((emp) => emp.name).join(", ");
    setValue("employeeNames", employeeNames);
  };

  // 初期値から従業員を設定
  useEffect(() => {
    if (defaultValues?.employeeNames) {
      const names = defaultValues.employeeNames.split(", ").filter(Boolean);
      const matchedEmployees = employees.filter((emp) =>
        names.includes(emp.name)
      );
      setSelectedEmployees(matchedEmployees);
    }
  }, [defaultValues?.employeeNames, employees]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="name">現場名</Label>
        <Input id="name" {...register("name")} />
        {errors.name && (
          <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="contractor">工務店名</Label>
        <div className="flex gap-2">
          <Input
            id="contractor"
            placeholder="工務店名を直接入力"
            value={contractorInput}
            onChange={(e) => {
              setContractorInput(e.target.value);
              setContractorSelect("");
            }}
            className="flex-1"
          />
          <Select
            value={contractorSelect}
            onValueChange={(val) => {
              setContractorSelect(val);
              setContractorInput("");
            }}
          >
            <SelectTrigger className="w-48">
              <SelectValue placeholder="取引先から選択" />
            </SelectTrigger>
            <SelectContent>
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.name}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        {errors.contractor && (
          <p className="text-red-500 text-xs mt-1">
            {errors.contractor.message}
          </p>
        )}
      </div>
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="postalCode">郵便番号</Label>
          <Input
            id="postalCode"
            {...register("postalCode")}
            placeholder="123-4567"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="prefecture">都道府県</Label>
          <Select onValueChange={(value) => setValue("prefecture", value)}>
            <SelectTrigger>
              <SelectValue placeholder="選択してください" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="滋賀県">滋賀県</SelectItem>
              <SelectItem value="京都府">京都府</SelectItem>
              <SelectItem value="大阪府">大阪府</SelectItem>
              <SelectItem value="兵庫県">兵庫県</SelectItem>
              <SelectItem value="奈良県">奈良県</SelectItem>
              <SelectItem value="和歌山県">和歌山県</SelectItem>
              <SelectItem value="岡山県">岡山県</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="city">市区町村</Label>
        <Input id="city" {...register("city")} placeholder="渋谷区" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">番地</Label>
        <Input id="address" {...register("address")} placeholder="1-1-1" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="date">現場日</Label>
        <Input id="date" {...register("date")} type="date" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="startTime">開始時刻</Label>
        <Input id="startTime" type="time" {...register("startTime")} />
        {errors.startTime && (
          <p className="text-red-500 text-xs mt-1">
            {errors.startTime.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="employeeNames">派遣従業員</Label>
        <div className="space-y-3">
          {/* 従業員検索入力 */}
          <Input
            placeholder="従業員名を入力して検索..."
            value={employeeSearch}
            onChange={(e) => setEmployeeSearch(e.target.value)}
          />

          {/* 検索結果 */}
          {employeeSearch && filteredEmployees.length > 0 && (
            <div className="border rounded-md p-2 max-h-32 overflow-y-auto">
              {filteredEmployees.map((employee) => (
                <div
                  key={employee.id}
                  className="p-2 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => handleEmployeeSelect(employee)}
                >
                  {employee.name}
                </div>
              ))}
            </div>
          )}

          {/* 選択された従業員 */}
          {selectedEmployees.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {selectedEmployees.map((employee) => (
                <Badge
                  key={employee.id}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {employee.name}
                  <button
                    type="button"
                    onClick={() => handleEmployeeRemove(employee.id)}
                    className="ml-1 hover:text-red-500"
                  >
                    <X size={12} />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* 隠しフィールド */}
          <input type="hidden" {...register("employeeNames")} />
        </div>
        <p className="text-xs text-gray-500">
          従業員名を入力して検索し、選択してください
        </p>
      </div>
      <div className="space-y-2">
        <Label htmlFor="notes">備考</Label>
        <Textarea id="notes" {...register("notes")} rows={3} />
      </div>
      <Button type="submit" disabled={submitting}>
        {submitting ? "保存中..." : "保存"}
      </Button>
    </form>
  );
}
