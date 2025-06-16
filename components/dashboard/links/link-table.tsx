"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getBaseUrl } from "@/lib/urlServices";
import CopyShortUrlButton from "@/components/utils/copyShortUrlButton";
import QrModel from "@/components/dashboard/links/qrModel";
import DeleteShortUrlButton from "@/components/dashboard/links/deleteShortUrlButton";
import EditShortUrlButton from "@/components/dashboard/links/editShortUrlButton";

interface Linkschema {
  id: number;
  shortCode: string;
  longUrl: string;
  clicks: number;
  createdAt: string;
}

export function LinkTable({ data }: { data: Linkschema[] }) {
  const baseUrl = getBaseUrl();

  // console.log(baseUrl);

  return (
    <Table>
      <TableHeader className="bg-muted sticky top-0 z-10">
        <TableRow>
          <TableHead>Original Urls</TableHead>
          <TableHead>Short Urls</TableHead>
          <TableHead>QR Code</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="*:data-[slot=table-cell]:first:w-8">
        {data.length > 0 ? (
          data?.map(
            ({ id, longUrl, shortCode, clicks, createdAt }: Linkschema) => {
              const shortUrl = `${baseUrl}/${shortCode}`;
              return (
                <TableRow key={id}>
                  <TableCell>{longUrl}</TableCell>
                  <TableCell className="flex items-center gap-2">
                    {shortUrl}
                    <CopyShortUrlButton shortUrl={shortUrl} />
                  </TableCell>
                  <TableCell>
                    <QrModel url={shortUrl} />
                  </TableCell>
                  <TableCell>{clicks}</TableCell>
                  <TableCell>{createdAt}</TableCell>
                  <TableCell className="flex items-center justify-end">
                    <EditShortUrlButton
                      id={id}
                      longUrl={longUrl}
                      shortCode={shortCode}
                      baseUrl={baseUrl!}
                    />
                    <DeleteShortUrlButton id={id} url={shortUrl} />
                  </TableCell>
                </TableRow>
              );
            }
          )
        ) : (
          <TableRow>
            <TableCell
              colSpan={6}
              className="h-40 text-center border text-muted-foreground"
            >
              No results.
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
