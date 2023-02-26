import { rest } from 'msw';

export const getMETResponse = rest.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/search",
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [{"total":112,"objectIDs":[193506,11157,471904,453243,764095,11951,4282,503519,764091,469887,472562,768547,544766,889327,485934,206989,312342,544453,544864,38039,195223,437261,449457,24320,693863,544740,322114,853964,842089,488694,248466,254819,207667,459211,256975,267019,437397,317196,37947,337700,459243,282774,200668,282234,199674,317793,448401,159388,544320,446285,159364,469960,436658,459027,459028,312180,451101,444607,450409,437490,198715,436966,447000,352328,749639,626692,435896,435600,331619,450486,337497,824771,437609,312429,499720,436101,313256,310453,310870,14100,209104,395485,679844,437654,24960,451268,438821,451725,452102,440723,39901,435809,437299,485416,437056,451909,437153,309959,435702,489994,435621,435817,436105,488221,436838,436244,437329,436896,436516,436944,435844,470304]}]
            )
        )
    }
)

export const getIdResponse = rest.get(
    "https://collectionapi.metmuseum.org/public/collection/v1/objects/:id",
    (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json(
                [{"objectID":193506,"isHighlight":true,"accessionNumber":"17.190.499","accessionYear":"1917","isPublicDomain":true,"primaryImage":"https://images.metmuseum.org/CRDImages/es/original/DT566.jpg","primaryImageSmall":"https://images.metmuseum.org/CRDImages/es/web-large/DT566.jpg","additionalImages":["https://images.metmuseum.org/CRDImages/es/original/es17.190.499.R.jpg","https://images.metmuseum.org/CRDImages/es/original/es17.190.499.AV1.jpg"],"constituents":null,"department":"European Sculpture and Decorative Arts","objectName":"Processional cross","title":"Processional cross","culture":"","period":"","dynasty":"","reign":"","portfolio":"","artistRole":"","artistPrefix":"","artistDisplayName":"","artistDisplayBio":"","artistSuffix":"","artistAlphaSort":"","artistNationality":"","artistBeginDate":"","artistEndDate":"","artistGender":"","artistWikidata_URL":"","artistULAN_URL":"","objectDate":"ca. 1460–80","objectBeginDate":1455,"objectEndDate":1485,"medium":"Partly gilt silver, niello, and copper with traces of gilding, over wood","dimensions":"Overall: 21 3/4 × 12 3/4 in. (55.2 × 32.4 cm)","measurements":[{"elementName":"Overall","elementDescription":null,"elementMeasurements":{"Height":55.2,"Width":32.4}}],"creditLine":"Gift of J. Pierpont Morgan, 1917","geographyType":"","city":"","state":"","county":"","country":"","region":"","subregion":"","locale":"","locus":"","excavation":"","river":"","classification":"Metalwork-Silver","rightsAndReproduction":"","linkResource":"","metadataDate":"2022-11-02T04:54:43.4Z","repository":"Metropolitan Museum of Art, New York, NY","objectURL":"https://www.metmuseum.org/art/collection/search/193506","tags":[{"term":"Christ","AAT_URL":"http://vocab.getty.edu/page/ia/901000087","Wikidata_URL":"https://www.wikidata.org/wiki/Q642420"},{"term":"Cross","AAT_URL":"http://vocab.getty.edu/page/aat/300235443","Wikidata_URL":"https://www.wikidata.org/wiki/Q40843"},{"term":"Crucifixion","AAT_URL":"http://vocab.getty.edu/page/aat/300404300","Wikidata_URL":"https://www.wikidata.org/wiki/Q3235597"},{"term":"Last Supper","AAT_URL":"http://vocab.getty.edu/page/ia/901000357","Wikidata_URL":"https://www.wikidata.org/wiki/Q51633"},{"term":"Saints","AAT_URL":"http://vocab.getty.edu/page/aat/300150555","Wikidata_URL":"https://www.wikidata.org/wiki/Q43115"}],"objectWikidata_URL":"https://www.wikidata.org/wiki/Q29383535","isTimelineWork":false,"GalleryNumber":"500"}]
            )
        )
    }
)


export const handlers = [
    getMETResponse,
    getIdResponse
]