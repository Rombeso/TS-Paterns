enum Status {
    PUBLISHED = "published",
    DRAFT = "draft",
    DELET = "deleted"
}

async function getFaqs(req: {
    topicId: number, status?: Status
}): Promise<{
    question: string,
    answer: string,
    tags: string[],
    likes: number,
    status: Status
}[]>{
    const res = await fetch('/faqs', {
        method: 'POST',
        body: JSON.stringify(req)
    });
    return await res.json();

}
