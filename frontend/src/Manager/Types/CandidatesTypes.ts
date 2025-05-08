export interface CandidateImages {
    name: string,
    path: string,
    size: number,
    type: string
}

export interface CandidateFormImages {
    image_name: string,
    originFileObj?: File,
    image_url?: string,
    image_id: string,
    isNew: boolean
}
export interface CandidateFormValues {
    candidate_name: string,
    candidate_description: string,
    candidate_images: CandidateFormImages[],
}
export interface Candidates {
    candidate_id: string
    candidate_name: string,
    candidate_description: string,
    candidate_images: CandidateFormImages[],
}

export interface CandidateModalInfo {
    actionType: "create" | "edit",
    product_id: string
}



