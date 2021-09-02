import { datasetTexts } from './textWalls';
import pitts_map from './imgs/map_pitts30k.png';
import msls_map from './imgs/map_msls.png';
import tokyo_map from './imgs/map_tokyo247.png';
import sf_map from './imgs/map_san_francisco.png';
import eyn_map from './imgs/map_eynsham.png';
import lucia_map from './imgs/map_st_lucia.png';
import { citations } from './links';


function ModelDataset(title, subtitle, textWall, img, refs){
    this.title = title;
    this.subtitle = subtitle;
    this.textWall = textWall;
    this.img = img;
    this.refs = refs;
}

const pitts= new ModelDataset('Pittsburgh',
                              'Pitts30k',
                              datasetTexts.pitts30k,
                              pitts_map,
                              citations.pittsRef);
const msls= new ModelDataset('Mapillary',
                              'Mapillary Street-level Sequences',
                              datasetTexts.msls,
                              msls_map,
                              citations.mslsRef);
const tokyo= new ModelDataset('Tokyo',
                              'Tokyo 24/7',
                              datasetTexts.tokyo,
                              tokyo_map,
                              citations.tokyoRef);
const sf= new ModelDataset('San Francisco',
                              'R-SF',
                              datasetTexts.sf,
                              sf_map,
                              citations.sfRef);
const eynsham= new ModelDataset('Eynsham',
                              'Eynsham',
                              datasetTexts.eynsham,
                              eyn_map,
                              citations.eynRef);
const lucia= new ModelDataset('St Lucia',
                              'St Lucia',
                              datasetTexts.lucia,
                              lucia_map,
                              citations.luciaRef);
                             

const availableDatasets = [pitts, msls, tokyo, sf, eynsham, lucia];

export { availableDatasets };