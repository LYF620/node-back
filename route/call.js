/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var line = '{"val":3,"left":{"val":4,"left":{"val":1,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}},"right":{"val":5,"left":null,"right":null}} {"val":4,"left":{"val":1,"left":null,"right":null},"right":{"val":2,"left":null,"right":null}}'

line = line.split(' ');
var p1 = JSON.parse(line[0])
var p2 = JSON.parse(line[1])
var hasSubtree = function(s,t){
         if(t==null){
        return true;
    }
    if(s==null){
        return false;
    }
    if(s.val == t.val){
        return isSubtree(s.left,t.left) && isSubtree(s.right,t.right);
    }else{
        return false;
        }
    }
var isSubtree = function (s, t) {
 //在这里实现判断t是否是s的子树
    if(s == null || t==null){
        return false;
    }
    return hasSubtree(s,t)||isSubtree(s.left,t)||isSubtree(s.right,t);  
}
console.log(JSON.stringify(isSubtree(p1, p2)))