export const handleText = (text: string) => {
    return text.split('').splice(0, 25).join('');
}