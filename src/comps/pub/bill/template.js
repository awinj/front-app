
export let Aggvo={
    parentVO:{
        pk: '1',
        code: 'wj',
        name: "王静",
    },
    bodyVO:{
        "body1":[
            {
                pk: '1',
                code: 'wj',
                name: "王静",
              },
              {
                pk: '1',
                code: 'wsw',
                name: "汪士文",
              },
        ],
        "body2":[
            {
                pk: '12',
                code: 'wj2',
                name: "王静2",
              },
              {
                pk: '12',
                code: 'wsw2',
                name: "汪士文2",
              },
        ]
    }
}


export let BillTemplate = {
    head: [
        {
            tabcode: "main",
            tabname:"主",
            billItems: [{ key: "pk", name: "主键", cardshow: true, listshow: true },
            { key: "code", name: "编码", cardshow: true, listshow: true },
            { key: "name", name: "名称", cardshow: true, listshow: true },
            { key: "dept", name: "部门", cardshow: true, listshow: true },
            { key: "org", name: "组织", cardshow: true, listshow: true },]
        }

    ],
    body: [
        {
            tabcode: "body1",
            tabname:"表体1",
            billItems: [{ key: "pk", name: "主键", cardshow: true, listshow: true },
            { key: "code", name: "编码", cardshow: true, listshow: true },
            { key: "name", name: "名称", cardshow: true, listshow: true }]
        },
        {
            tabcode: "body2",
            tabname:"表体2",
            billItems: [{ key: "pk", name: "主键2", cardshow: true, listshow: true },
            { key: "code", name: "编码2", cardshow: true, listshow: true },
            { key: "name", name: "名称2", cardshow: true, listshow: true }]
        }
    ],
    tail: [
        {
            tabcode: "tail",
            tabname:"表尾1",
            billItems: [{ key: "pk", name: "主键", cardshow: true, listshow: true },
            { key: "code", name: "编码", cardshow: true, listshow: true },
            { key: "name", name: "名称", cardshow: true, listshow: true }]
        }
    ],
}


