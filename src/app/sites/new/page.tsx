"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SiteForm } from "@/components/forms/site-form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { DashboardLayout } from "@/components/layout/dashboard-layout";

// SiteFormの型をインポート
type FormValues = {
  name: string;
  contractor: string;
  postalCode?: string;
  prefecture?: string;
  city?: string;
  address?: string;
  startDate: string;
  notes?: string;
  employeeNames?: string;
};

export default function NewSitePage() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (values: FormValues) => {
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/sites", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "登録に失敗しました");
      } else {
        router.push("/sites");
      }
    } catch {
      setError("登録に失敗しました");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <DashboardLayout>
      <div className="p-6 max-w-xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>新規現場作成</CardTitle>
          </CardHeader>
          <CardContent>
            <SiteForm onSubmit={handleSubmit} submitting={submitting} />
            {error && <p className="text-red-500 mt-2">{error}</p>}
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
}
