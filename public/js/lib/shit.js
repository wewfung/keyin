var cat = "cat";

function cow() {
    console.log("cow");
    console.log(cat);
}

export function shit() {
    cow();
    console.log("shit");
}

export function otherShit() {
    console.log("other shitty");
}
