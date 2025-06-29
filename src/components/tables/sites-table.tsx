import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Site } from "@/types/site";

interface Props {
  sites: Site[];
  onDelete?: (id: string) => void;
}

export function SitesTable({ sites, onDelete }: Props) {
  const formatAddress = (site: Site) => {
    const parts = [
      site.postalCode,
      site.prefecture,
      site.city,
      site.address,
    ].filter(Boolean);
    return parts.length > 0 ? parts.join(" ") : "-";
  };

  // 重複する現場名を一つにまとめる
  const uniqueSites = sites.reduce((acc: Site[], currentSite) => {
    const existingSite = acc.find((site) => site.name === currentSite.name);
    if (!existingSite) {
      acc.push(currentSite);
    }
    return acc;
  }, []);

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>現場名</TableHead>
          <TableHead>工務店名</TableHead>
          <TableHead>住所</TableHead>
          <TableHead>開始日</TableHead>
          <TableHead>従業員</TableHead>
          <TableHead>ステータス</TableHead>
          <TableHead>操作</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {uniqueSites.map((site) => (
          <TableRow key={site.id}>
            <TableCell>{site.name}</TableCell>
            <TableCell>{site.contractor}</TableCell>
            <TableCell>{formatAddress(site)}</TableCell>
            <TableCell>
              {site.startDate ? site.startDate.slice(0, 10) : ""}
            </TableCell>
            <TableCell>{site.employeeNames || "-"}</TableCell>
            <TableCell>
              {site.status === "ACTIVE"
                ? "稼働中"
                : site.status === "COMPLETED"
                ? "完了"
                : "中止"}
            </TableCell>
            <TableCell className="flex gap-2">
              <Link href={`/sites/${site.id}`}>
                <Button size="sm" variant="outline">
                  詳細
                </Button>
              </Link>
              <Link href={`/sites/${site.id}/edit`}>
                <Button size="sm" variant="secondary">
                  編集
                </Button>
              </Link>
              {onDelete && (
                <Button
                  size="sm"
                  variant="destructive"
                  onClick={() => onDelete(site.id)}
                >
                  削除
                </Button>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
