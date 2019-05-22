


const { getMoreData } = require('../model/queries/getData')

exports.get = (req,res) => {


  
    getMoreData().then(response => {



        const children = response.map((element)=> {
           

                return   { "children": [{
                    "name": "website",
                    "type": "url",
                    "url": element["row_to_json"]["f3"]
                   }, {
                    "name": "Github",
                    "type": "url",
                    "url": element["row_to_json"]["f4"]
                   },
                { "name": `Software used: ${element["row_to_json"]["f6"]} `,
                "type": "url",
                "url": "#"

                }],
                "name": element["row_to_json"]["f2"],
                "type" : "folder"};
                  
        });
       

        const dataToSend = 
        { "children": children,
              "name": "projects",
              "type" : "folder"};

        res.send(dataToSend);
   
})
   
};
