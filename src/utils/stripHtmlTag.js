export const stripHtmlTags = (content) => {
    return content.replace(/<[^>]+>/g, '');
};
