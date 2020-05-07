export class ChangeLogsComparisonService {
    public Init(): void {
        this._CreateModal();
        this._InsertExtraColumnHeader();
        this._PopulateExtraRows();
    }

    private _InsertExtraColumnHeader(): void {
        if (!this._DoesComparisonColumnExist()) {
            var tHead = document.getElementsByTagName("thead");
            var tr = tHead[0].getElementsByTagName("tr");
            
            var th = document.createElement("th");
            th.id = "comparisonColumn"
            th.innerText = "Comparision";
            
            tr[0].appendChild(th);
        }
    }

    private _PopulateExtraRows(): void {
        var tBody = document.getElementsByTagName("tbody");
        var trArrayBody = tBody[0].getElementsByTagName("tr");

        for (const trB of trArrayBody) {
            //if (!this._DoesChangelogHasButton(trB) && trB.innerText != "") {
            if (!this._DoesChangelogHasButton(trB)) {
                
                debugger
                var button = document.createElement("button");

                var tdArray = trB.getElementsByTagName("td");
                let BeforeText = "";
                let AfterText = "";
                let counter = 0;
                for (const td of tdArray) {
                    if (counter == 5) {
                        BeforeText = td.innerText;
                    } else if (counter == 6) {
                        AfterText = td.innerText;
                    }
                    counter++;
                }

                if (BeforeText != AfterText) {
                    button.innerText = "Check";

                    button.onclick = ()=> { this._OpenDiffModal(button, BeforeText, AfterText)};
                    trB.appendChild(button);
                }
            }
        }
    }

    private _CreateModal(): void {
        let divModal = document.createElement("div");
        divModal.className = "modal";
        divModal.id = "myModal";

        let divModalContent = document.createElement("div");
        divModalContent.className = "modal-content";

        let span = document.createElement("span");
        span.className = "close";
        span.innerText = "X";
        divModalContent.appendChild(span);

        let p = document.createElement("p");
        divModalContent.appendChild(p);

        let img = document.createElement("img");
        img.src = chrome.extension.getURL("images/arrow.png");

        divModalContent.appendChild(img);

        divModal.appendChild(divModalContent);
        document.body.appendChild(divModal);
    }

    private _GetChangeLogsRows(): HTMLTableRowElement {
        var tBody = document.getElementsByTagName("tbody");
        var trArrayBody = tBody[0].getElementsByTagName("tr");
    }

    private _DoesChangelogHasButton(tr: HTMLTableRowElement): boolean {
        return tr.getElementsByTagName("button") !== null;
    }

    private _DoesComparisonColumnExist(): boolean {
        var column = document.getElementById("comparisonColumn");        
        return column !== null;
    }

    private _OpenDiffModal(btn, contentBefore, contetAfter): void {
        // let diffType = "diffWords"
        // //var changes = JsDiff[diffType](JSON.stringify(JSON.parse(contentBefore), null, 2), JSON.stringify(JSON.parse(contetAfter), null, 2));
        // //var changes = JsDiff[diffType](o.prettyJ(contentBefore), o.prettyJ(contetAfter));
        // //var changes = JsDiff[diffType](o.neatJSON(contentBefore), o.neatJSON(contetAfter));
        // var changes = JsDiff[diffType](contentBefore, contetAfter);

        // var modal = document.getElementById("myModal");
        // modal.style.display = "block";

        // var pContent = modal.getElementsByTagName("p");
        // pContent[0].innerHTML = JsDiff.convertChangesToXML(changes);

        // // Get the <span> element that closes the modal
        // var span = document.getElementsByClassName("close")[0];

        // // When the user clicks on <span> (x), close the modal
        // span.onclick = function () {
        //     modal.style.display = "none";
        // }

        // // When the user clicks anywhere outside of the modal, close it
        // window.onclick = function (event) {
        //     if (event.target == modal) {
        //         modal.style.display = "none";
        //     }
        // }

        // var del = document.getElementsByClassName("diff")[0];
        // del.scrollIntoView();
    }


}