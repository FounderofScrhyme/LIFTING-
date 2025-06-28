'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Trash2 } from 'lucide-react';

interface DeleteEmployeeButtonProps {
    employeeId: string;
    employeeName: string;
}

export function DeleteEmployeeButton({ employeeId, employeeName }: DeleteEmployeeButtonProps) {
    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        if (!confirm(`従業員「${employeeName}」を削除しますか？\nこの操作は取り消せません。`)) {
            return;
        }

        setIsDeleting(true);

        try {
            const response = await fetch(`/api/employees/${employeeId}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                router.push('/employees');
                router.refresh();
            } else {
                const error = await response.json();
                alert(error.error || '削除に失敗しました');
            }
        } catch (error) {
            console.error('削除エラー:', error);
            alert('削除に失敗しました');
        } finally {
            setIsDeleting(false);
        }
    };

    return (
        <Button
            variant="outline"
            className="flex items-center gap-2 text-red-600 hover:text-red-700"
            onClick={handleDelete}
            disabled={isDeleting}
        >
            <Trash2 className="h-4 w-4" />
            {isDeleting ? '削除中...' : '削除'}
        </Button>
    );
} 