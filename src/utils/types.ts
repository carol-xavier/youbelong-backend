import { Donor } from "@prisma/client";
import { Institution } from "@prisma/client";

export type CreateDonorData = Omit<Donor, "id" | "createdAt">;

export type DonorData = Omit<Donor, "id" | "name" | "createdAt">;

export type CreateInstitutionData = Omit<Institution, "id" | "createdAt">;

export type CreateInstitutionArticlesData = {
    institutionId: number,
    articleIds: number[]
};