import { createFileRoute } from "@tanstack/react-router";

import { SectorsPage } from "@/features/sectors/page";

export const Route = createFileRoute("/secteurs")({ component: SectorsPage });
