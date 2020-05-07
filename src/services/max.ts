export function act () {
    alert("got it");
    alert(document);

    var tHead = document.getElementsByTagName("thead");
    var tr = tHead[0].getElementsByTagName("tr");

    var th = document.createElement("th");
    th.innerText = "Comparision";

    tr[0].appendChild(th);
}

export class testAct {
    public send(): void {
        alert('sent v2');
    }
}