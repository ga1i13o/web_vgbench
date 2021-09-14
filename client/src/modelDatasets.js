import { datasetTexts } from './textWalls';
import pitts_map from './imgs/map_pitts30k.png';
import pitts_query from './imgs/pitts30k_query.jpg';
import pitts_pos from './imgs/pitts30k_pos.jpg';

import msls_map from './imgs/map_msls.png';
import msls_query from './imgs/msls_query.jpg';
import msls_pos from './imgs/msls_pos.jpg';

import tokyo_map from './imgs/map_tokyo247.png';
import tokyo_query from './imgs/tokyo247_query.jpg';
import tokyo_pos from './imgs/tokyo247_pos.jpg';

import sf_map from './imgs/map_san_francisco.png';
import sf_query from './imgs/san_francisco_query.jpg';
import sf_pos from './imgs/san_francisco_pos.jpg';

import eyn_map from './imgs/map_eynsham.png';
import eyn_query from './imgs/eynsham_query.jpg';
import eyn_pos from './imgs/eynsham_pos.jpg';

import lucia_map from './imgs/map_st_lucia.png';
import lucia_query from './imgs/st_lucia_query.jpg';
import lucia_pos from './imgs/st_lucia_pos.jpg';

import { citations } from './links';


function ModelDataset(title, subtitle, textWall, img, refs, imgEx){
    this.title = title;
    this.subtitle = subtitle;
    this.textWall = textWall;
    this.img = img;
    this.refs = refs;
    this.imgExamples =  imgEx;
}

const pitts= new ModelDataset('Pittsburgh',
                              'Pitts30k',
                              datasetTexts.pitts30k,
                              pitts_map,
                              citations.pittsRef,
                              {query: pitts_query, pos: pitts_pos});
const msls= new ModelDataset('Mapillary Street-level Sequences',
                              'Mapillary',
                              datasetTexts.msls,
                              msls_map,
                              citations.mslsRef,
                              {query: msls_query, pos: msls_pos});
const tokyo= new ModelDataset('Tokyo 24/7',
                              'Tokyo 24/7',
                              datasetTexts.tokyo,
                              tokyo_map,
                              citations.tokyoRef,
                              {query: tokyo_query, pos: tokyo_pos});
const sf= new ModelDataset('San Francisco',
                              'San Francisco',
                              datasetTexts.sf,
                              sf_map,
                              citations.sfRef,
                              {query: sf_query, pos: sf_pos});
const eynsham= new ModelDataset('Eynsham',
                              'Eynsham',
                              datasetTexts.eynsham,
                              eyn_map,
                              citations.eynRef,
                              {query: eyn_query, pos: eyn_pos});
const lucia= new ModelDataset('St Lucia',
                              'St Lucia',
                              datasetTexts.lucia,
                              lucia_map,
                              citations.luciaRef,
                              {query: lucia_query, pos: lucia_pos});
                             

const availableDatasets = [pitts, msls, tokyo, sf, eynsham, lucia];

export { availableDatasets };