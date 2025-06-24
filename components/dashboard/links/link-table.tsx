"use client";

import React from "react";
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
// import EditShortUrlButton from "@/components/dashboard/links/editShortUrlButton";

interface LinksData {
  id: number;
  shortCode: string;
  longUrl: string;
  clicks: number;
  createdAt: Date;
  userId?: string | null ;
}

interface LinkTableProps {
  data: LinksData[];
}

const LinkTable: React.FC<LinkTableProps> = ({ data }) => {
  const baseUrl = getBaseUrl();

  if (!baseUrl) return null;

  return (
    <Table>
      <TableHeader className="bg-muted sticky top-0 z-10">
        <TableRow>
          <TableHead>Original URL</TableHead>
          <TableHead>Short URL</TableHead>
          <TableHead>QR Code</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Created</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody className="*:data-[slot=table-cell]:first:w-8">
        {data.length > 0 ? (
          data.map(({ id, longUrl, shortCode, clicks, createdAt }) => {
            const shortUrl = `${baseUrl}/r/${shortCode}`;
            return (
              <TableRow key={id}>
                <TableCell className="max-w-[250px] truncate">
                  {longUrl}
                </TableCell>
                <TableCell className="flex items-center gap-2">
                  <span className="truncate">{shortUrl}</span>
                  <CopyShortUrlButton shortUrl={shortUrl} />
                </TableCell>
                <TableCell>
                  <QrModel url={shortUrl} />
                </TableCell>
                <TableCell>{clicks}</TableCell>
                <TableCell>
                  {createdAt.toDateString().replace(" ", ", ")}
                </TableCell>
                <TableCell className="flex items-center justify-end gap-2">
                  {/* <EditShortUrlButton
                    id={id}
                    longUrl={longUrl}
                    shortCode={shortCode}
                    baseUrl={baseUrl}
                  /> */}
                  <DeleteShortUrlButton id={id} url={shortUrl} />
                </TableCell>
              </TableRow>
            );
          })
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
};

export default LinkTable;
