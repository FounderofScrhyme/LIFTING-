"use client"

import { Employee } from "@/types/employee";
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Edit, Eye, Mail, MapPin, Phone, Search, Trash2, User } from "lucide-react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export function EmployeeList() {
    const router = useRouter();
    const [employees, setEmployees] = useState<Employee[]>([]);
    const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetchEmployees();
    }, []);

    useEffect(() => {
        const filtered = employees.filter(employee =>
            employee.name.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredEmployees(filtered);
    }, [employees, searchTerm]);

    const fetchEmployees = async () => {
        try {
            const response = await fetch("/api/employees");
            if (response.ok) {
                const data = await response.json();
                setEmployees(data);
            }
        } catch (error) {
            console.error("従業員取得エラー:", error);
        } finally {
            setIsLoading(false);
        }
    }

    const handleDelete = async (id: string) => {
        if (!confirm('この従業員を削除しますか？')) return;

        try {
            const response = await fetch(`/api/employees/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setEmployees(employees.filter(employee => employee.id !== id));
            } else {
                alert('削除に失敗しました');
            }
        } catch (error) {
            console.error('削除エラー:', error);
            alert('削除に失敗しました');
        }
    };

    if (isLoading) {
        return (
            <Card>
                <CardContent className="p-6">
                    <div className="text-center">読み込み中...</div>
                </CardContent>
            </Card>
        );
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center justify-between">
                    <span>従業員一覧</span>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                        <Input
                            placeholder="従業員を検索..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="pl-10 w-64"
                        />
                    </div>
                </CardTitle>
            </CardHeader>
            <CardContent>
                {filteredEmployees.length === 0 ? (
                    <div className="text-center py-8 text-gray-500">
                        {searchTerm ? "該当する従業員が見つかりません" : "従業員が登録されていません"}
                    </div>
                ) : (
                    <div className="grid gap-4">
                        {filteredEmployees.map((employee) => (
                            <div
                                key={employee.id}
                                className="border rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-center gap-3 mb-2">
                                            <User className="h-5 w-5 text-gray-400" />
                                            <h3 className="font-semibold text-lg">{employee.name}</h3>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400">


                                            {employee.email && (
                                                <div className="flex items-center gap-2">
                                                    <Mail className="h-4 w-4" />
                                                    <span>{employee.email}</span>
                                                </div>
                                            )}

                                            {employee.phone && (
                                                <div className="flex items-center gap-2">
                                                    <Phone className="h-4 w-4" />
                                                    <span>{employee.phone}</span>
                                                </div>
                                            )}

                                            {employee.prefecture && employee.city && (
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="h-4 w-4" />
                                                    <span>{employee.prefecture} {employee.city}</span>
                                                </div>
                                            )}

                                            {employee.emergencyContactPerson && (
                                                <div className="flex items-center gap-2">
                                                    <span>緊急連絡先: {employee.emergencyContactPerson}</span>
                                                </div>
                                            )}

                                            {employee.emergencyContactPhone && (
                                                <div className="flex items-center gap-2">
                                                    <span>緊急連絡先電話番号: {employee.emergencyContactPhone}</span>
                                                </div>
                                            )}

                                            {employee.position && (
                                                <div className="flex items-center gap-2">
                                                    <span>業種: {employee.position}</span>
                                                </div>
                                            )}

                                            {employee.unitPay && (
                                                <div className="flex items-center gap-2">
                                                    <span>現場単価: {employee.unitPay}</span>
                                                </div>
                                            )}

                                            {employee.hourlyOvertimePay && (
                                                <div className="flex items-center gap-2">
                                                    <span>残業代一時間あたり: {employee.hourlyOvertimePay}</span>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 ml-4">
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/clients/${employee.id}`)}
                                        >
                                            <Eye className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => router.push(`/clients/${employee.id}/edit`)}
                                        >
                                            <Edit className="h-4 w-4" />
                                        </Button>
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleDelete(employee.id)}
                                            className="text-red-600 hover:text-red-700"
                                        >
                                            <Trash2 className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    )
}
