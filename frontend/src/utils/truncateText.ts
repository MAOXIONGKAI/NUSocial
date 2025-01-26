import {postpreviewLengthLimit} from "../data/textLengthLimit.ts";

export default function truncateText(text: string) {
    if (text.length <= postpreviewLengthLimit) {
        return text;
    }
    return text.substring(0, postpreviewLengthLimit) + "...";
}
