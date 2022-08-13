import { Donor } from "@prisma/client";

export type CreateDonorData = Omit<Donor, "id" | "createdAt">;