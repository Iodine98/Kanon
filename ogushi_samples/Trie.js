class Node{
    constructor(val){
        this.val = val;
        this.left = null;
        this.mid = null;
        this.right = null;
    }
    
    add(val){
        if(val.length > 0){
            let top = val.slice(0, 1);
            if(alphabetSort(this.val, top) == 0){
                if(this.mid == null){
                    if(val.length > 1){
                        let temp = new Node(val.slice(1, 2));
                        this.mid = temp;
                        temp.add(val.slice(1));
                    }
                } else {
                    this.mid.add(val.slice(1));
                }
            } else if(alphabetSort(this.val, top) == -1){
                if(this.left == null){
                    let temp = new Node(val.slice(0, 1));
                    this.left = temp;
                    temp.add(val);
                } else {
                    this.left.add(val);
                }
            } else if(alphabetSort(this.val, top) == 1){
                if(this.right == null){
                    let temp = new Node(val.slice(0, 1));
                    this.right = temp;
                    temp.add(val);
                } else {
                    this.right.add(val);
                }
            }
        }
    }
}

function alphabetSort(a, b) {
    var astr = a.slice(0, 1).toString().toLowerCase();
    var bstr = b.slice(0, 1).toString().toLowerCase();

    if (astr < bstr) {
        return 1;
    } else if (astr > bstr) {
        return -1;
    } else {
        return 0;
    }
}

var num = 2;
var trie3 = new Node(num.toString());
num = 2461;
trie3.add(num.toString());
num = 18;
trie3.add(num.toString());
num = 12;
trie3.add(num.toString());
num = 71;
trie3.add(num.toString());
num = 93;
trie3.add(num.toString());
num = 91;
trie3.add(num.toString());