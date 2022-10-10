
function getIpListFromDangerRulezSk() {
    let a = document.querySelector('pre');
    let nodes_text = a.innerText.split(`\n\n`)[1];
    let nodes = nodes_text.split(`\n`);
    var r = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/;
    let res = [];
    nodes.forEach(item => {
        if (item.match(r)) {
            let tmp = item.split('\t\t')[0];
            res.push(tmp);
        }
    });
    return res;
}


export default {
    getIpListFromDangerRulezSk
}