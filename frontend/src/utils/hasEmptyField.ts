import FormValues from "../types/FormValues.ts";

export default function hasEmptyField(form: Record<string, FormValues>) {
    for (const field in form) {
        if (!form[field]) {
            return true;
        }
    }
    return false;
}
