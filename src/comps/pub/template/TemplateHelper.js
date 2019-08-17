





// {
//     title: 'Name',
//     dataIndex: 'name',
//     key: 'name',
//     render: text => <a href="javascript:;">{text}</a>,
//   },

function TemplateHelper(){}

TemplateHelper.convert2AntColumn= (billitems) =>{
    // template=billtemplate.body;
    var columns=new Array();
    if(!isNullOrEmpty(billitems)){
        return billitems.map((item,index)=>{
                if(item.listshow){
                    return {title:item.name,dataIndex:item.key,key:item.key}
                }
            })
        
    }
   
    return columns;
}



// tabs: [{
//     tabcode: "first",
//     tabname: "第一个",
//     billitems: TemplateHelper.convert2AntColumn(BillTemplate.body[0]),

// }, {
//     tabcode: "second",
//     tabname: "第二个",
//     billitems:TemplateHelper.convert2AntColumn(BillTemplate.body[1]),

// }],

// body: [
//     {
//         tabcode: "body1",
//         tabname:"表体1",
//         billItems: [{ key: "pk", name: "主键", cardshow: true, listshow: true },
//         { key: "code", name: "编码", cardshow: true, listshow: true },
//         { key: "name", name: "名称", cardshow: true, listshow: true }]
//     },
//     {
//         tabcode: "body2",
//         tabname:"表体2",
//         billItems: [{ key: "pk", name: "主键2", cardshow: true, listshow: true },
//         { key: "code", name: "编码2", cardshow: true, listshow: true },
//         { key: "name", name: "名称2", cardshow: true, listshow: true }]
//     }
// ],
TemplateHelper.convert2BillTab= (billtab)=>{
    var tab=new Array();
    if(!isNullOrEmpty(billtab)){
        tab= billtab.map((item,index)=>{
                return {
                    tabcode:item.tabcode,
                    tabname:item.tabname,
                    billitems:TemplateHelper.convert2AntColumn(item.billItems)
                }
            }
        );
    }
    return tab;
}



function isNullOrEmpty(obj){
    return obj==null||obj.length<=0;
}


export default TemplateHelper

