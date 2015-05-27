/**
 * Created by azder on 2014-07-04.
 */


jas = this;
mome = require('mome.js');

mome
    .stani()
    .then(() => mome.igraj())
    .then(() => jas.gledaj(mome).then(() => jas.vesel(true)));



