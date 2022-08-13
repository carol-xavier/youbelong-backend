import { Donor } from "@prisma/client";

export type CreateDonorData = Omit<Donor, "id" | "createdAt">;

export type DonorData = Omit<Donor, "id" | "name" | "createdAt">;