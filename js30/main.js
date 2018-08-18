function getRoots() {
    let a = document.getElementById("quad").value;
    let b = document.getElementById("unit").value;
    let c = document.getElementById("constant").value;

    if (a.length == 0 || b.length == 0 || c.length == 0) {
        document.getElementById("resultantRoots").innerHTML = "Donot leave the boxes empty!"
    } else if (parseInt(a) === 0) {
        document.getElementById("resultantRoots").innerHTML = "For a quadratic equation, a cannot be 0!";
    } else {
        a = parseInt(a);
        b = parseInt(b);
        c = parseInt(c);
        let discriminant = (b * b) - (4 * a * c);
        let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
        let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
        let nature = "";
        let rootsStatement = "";
        if(discriminant > 0) {
            nature = "real";
            rootsStatement = "The roots are " + root1 + " and " + root2 + "<br/>" + "The nature of the roots is " + nature;
        } else if (discriminant < 0) {
            nature = "imaginary";
            rootsStatement = "The nature of the roots is " + nature;
        } else {
            nature = "real and equal";
            rootsStatement = "The roots are " + root1 + " and " + root2 + "<br/>" + "The nature of the roots is " + nature;
        }

        document.getElementById("resultantRoots").innerHTML = "<div class='result'>" + rootsStatement + "</div>";
    }

}
function getSequence() {
    let n = document.getElementById("fibonacciLimit").value;
    if(n.length > 0) {
        n = parseInt(n);
        let loopIterator = n;
        let seqNo = 1;
        let nextSeqNo = 2;
        let totSeqNo = 0;
        let finalSequence = "";
        while ((loopIterator--) > 0) {
            finalSequence += seqNo.toString() + "<br/>";
            totSeqNo = seqNo + nextSeqNo;
            seqNo = nextSeqNo;
            nextSeqNo = totSeqNo;
        }
        document.getElementById("resultantSequence").innerHTML = "<div class='result'>" + "The fibonacci sequence of " + n + " steps is<br/>" + finalSequence + "</div>";
    } else {
        document.getElementById("resultantSequence").innerHTML = "Donot leave the box empty!";
    }
}
function sortElements() {
    let n = document.getElementById("numSortElements").value;
    if(n.length > 0) {
        n = parseInt(n);
        let inputBox = "";
        document.getElementById("elementsOfSort").innerHTML = inputBox;
        for(let i = 0; i < n; i++) {
            inputBox += '<div class="subquestion">Enter element ' + (i + 1).toString() + '&nbsp;<input class="input-box" id="sortElement' + (i + 1).toString() + '"/></div><br/>';
        }
        document.getElementById("elementsOfSort").innerHTML = inputBox;
        document.getElementById("sortElementsInputButton").style.display = "none";
        let sortButton = '<button class="custom-button" onclick="showSortedElements()">Sort elements</button>';
        document.getElementById("elementsOfSort").innerHTML += sortButton;

    } else {
        document.getElementById("resultSort").innerHTML = "Donot leave the box empty!";
        
    }
}
function showSortedElements() {
    let n = parseInt(document.getElementById("numSortElements").value);
    let values = new Array(n);
    for (let i = 0; i < n; i++) {
        let idFromHtml = "sortElement" + (i + 1).toString();
        let val = parseInt(document.getElementById(idFromHtml).value);
        values[i] = val;
    }
    values.sort(function(value1, value2) { return value1 - value2 });
    let finalSortedString = "";
    for(let i = 0; i < n; i++) {
        finalSortedString += values[i].toString() + " ";
    }
    
    document.getElementById("resultSort").innerHTML = '<div class="result">The sorted elements are ' + finalSortedString;
}
function liSearchElements() {
    let n = document.getElementById("numLinearElements").value;
    if (n.length > 0) {
        n = parseInt(n);
        let inputBox = "";
        document.getElementById("elementsOfLinearSearch").innerHTML = inputBox;
        for (let i = 0; i < n; i++) {
            inputBox += '<div class="subquestion">Enter element ' + (i + 1).toString() + '&nbsp;<input class="input-box" id="liArrayElement' + (i + 1).toString() + '"/></div><br/>';
        }
        inputBox += '<div class="subquestion">Enter an element to search&nbsp;<input id="liSearchElement" class="input-box"/></div><br/>';
        document.getElementById("elementsOfLinearSearch").innerHTML = inputBox;
        document.getElementById("linearElementsInputButton").style.display = "none";
        let searchButton = '<button class="custom-button" onclick="showLiSearchedElement()">Check for the element</button>';
        document.getElementById("elementsOfLinearSearch").innerHTML += searchButton;

    } else {
        document.getElementById("resultLinearSearch").innerHTML = "Donot leave the box empty!";

    }
}
function showLiSearchedElement() {
    let n = parseInt(document.getElementById("numLinearElements").value);
    let liSearchElement = parseInt(document.getElementById("liSearchElement").value);
    let values = new Array(n);
    for (let i = 0; i < n; i++) {
        let idFromHtml = "liArrayElement" + (i + 1).toString();
        let val = parseInt(document.getElementById(idFromHtml).value);
        values[i] = val;
    }
    
    let finalIndex = "";
    let isPresent = false;
    for (let i = 0; i < n; i++) {
        if(liSearchElement === values[i]) {
            finalIndex = i.toString();
            isPresent = true;
        }
    }
    let finalSearchElements = "";
    for (let i = 0; i < n; i++) {
        finalSearchElements += values[i].toString() + " ";
    }
    if(isPresent) {
        document.getElementById("resultLinearSearch").innerHTML = '<div class="result">The first occurence of the element ' + liSearchElement + ' is found at the index ' + finalIndex + ' in ' + finalSearchElements;
    } else {
        document.getElementById("resultLinearSearch").innerHTML = '<div class="result">Element ' + liSearchElement + ' is not found in ' + finalSearchElements;
    }
}
function biSearchElements() {
    let n = document.getElementById("numBinaryElements").value;
    if (n.length > 0) {
        n = parseInt(n);
        let inputBox = "";
        inputBox += '<div class="subquestion"><em>Elements must be given in ascending order</em></div><br/>';
        for (let i = 0; i < n; i++) {
            inputBox += '<div class="subquestion">Enter element ' + (i + 1).toString() + '&nbsp;<input class="input-box" id="biArrayElement' + (i + 1).toString() + '"/></div><br/>';
        }
        inputBox += '<div class="subquestion">Enter an element to search&nbsp;<input id="biSearchElement" class="input-box"/></div><br/>';
        document.getElementById("elementsOfBinarySearch").innerHTML = inputBox;
        document.getElementById("binaryElementsInputButton").style.display = "none";
        let searchButton = '<button class="custom-button" onclick="showBiSearchedElement()">Check for the element</button>';
        document.getElementById("elementsOfBinarySearch").innerHTML += searchButton;

    } else {
        document.getElementById("resultBinarySearch").innerHTML = "Donot leave the box empty!";

    }
}
function showBiSearchedElement() {
    let n = document.getElementById("numBinaryElements").value;
    if (n.length > 0) {
        n = parseInt(n);
        let biSearchElement = parseInt(document.getElementById("biSearchElement").value);
        let values = new Array(n);
        for (let i = 0; i < n; i++) {
            let idFromHtml = "biArrayElement" + (i + 1).toString();
            let val = document.getElementById(idFromHtml).value;
            if(val.length === 0) {
                document.getElementById("resultBinarySearch").innerHTML = "Donot leave the boxes empty!";
                return;
            }
            values[i] = val;
        }
        let finalIndex = "";
        let low = 0;
        let high = n - 1;
        let isPresent = false;
        while(low <= high) {
            let mid = parseInt((low + high) / 2);
            if(biSearchElement > values[mid]) {
                low = mid + 1;
            } else if(biSearchElement < values[mid]) {
                high = mid - 1;
            } else if (biSearchElement === values[mid]){
                finalIndex = mid;
                isPresent = true;
                break;
            }
        }
        let finalSearchElements = "";
        for (let i = 0; i < n; i++) {
            finalSearchElements += values[i].toString() + " ";
        }
        if (isPresent) {
            document.getElementById("resultBinarySearch").innerHTML = '<div class="result">The occurence of the element ' + biSearchElement + ' is found at the index ' + finalIndex + ' in ' + finalSearchElements;
        } else {
            document.getElementById("resultBinarySearch").innerHTML = '<div class="result">Element ' + biSearchElement + ' is not found in ' + finalSearchElements;
        }
    } else {
        document.getElementById("resultBinarySearch").innerHTML = "Donot leave the box empty!";

    }
}