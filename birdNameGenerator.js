var nameSources = [{
    // male names
    names : [
        'עיטם',
        'נחלול',
        'בולבול',
        'נפלול',
        'חוטם',
        'פייתן',
        'טייסן',
        'נצלן',
        'מציצן',
        'צייצן',
    ],
    adj : [
        'שחור',
        'כהה',
        'גדול',
        'חסר',
        'אדום',
        'לבן',
        'קטן',
        'צהוב',
        'קצר',
    ],
    parts : [
        'זנב',
        'נוצה',
        'שיניים',
        'מקור',
        'כתף',
        'אצבע',
        'אוזן',
        'מצח',
        'חזה',
        'ישבן',
    ]
},
{
    // female names
    names : [''],
    adj : [''],
    parts : ['']
}];

function getNext() {
    
    // choose a random source
    var k = nameSources.length;
    Math.floor((Math.random() * n));
    var source = nameSources[k];

    var num_names = source.names.length;
    var num_adj = source.adj.length;
    var num_parts = source.parts.length;

    // select a random mix
    var n = Math.floor((Math.random() * num_names));
    var a = Math.floor((Math.random() * num_adj));
    var p = Math.floor((Math.random() * num_parts));

    var name = source.names[n];
    var adj = source.adj[a];
    var part = sources.parts[p];

    // return it
    return name + " " + adj + " " + part;
}