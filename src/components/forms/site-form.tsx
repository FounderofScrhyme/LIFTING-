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

const schema = z.object({
  name: z.string().min(1, "現場名は必須です"),
  contractor: z.string().min(1, "工務店名は必須です"),
  postalCode: z.string().optional(),
  prefecture: z.string().optional(),
  city: z.string().optional(),
  address: z.string().optional(),
  startDate: z.string().min(1, "開始日は必須です"),
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
  const [contractorInput, setContractorInput] = useState("");
  const [contractorSelect, setContractorSelect] = useState("");

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

  // 工務店名の同期
  useEffect(() => {
    if (contractorSelect) {
      setValue("contractor", contractorSelect);
    } else if (contractorInput) {
      setValue("contractor", contractorInput);
    }
  }, [contractorSelect, contractorInput, setValue]);

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
        <Label htmlFor="startDate">開始日</Label>
        <Input id="startDate" type="date" {...register("startDate")} />
        {errors.startDate && (
          <p className="text-red-500 text-xs mt-1">
            {errors.startDate.message}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="employeeNames">派遣従業員</Label>
        <Input
          id="employeeNames"
          {...register("employeeNames")}
          placeholder="田中太郎, 佐藤花子, 山田次郎"
        />
        <p className="text-xs text-gray-500">
          複数の従業員はカンマ（,）で区切って入力してください
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
