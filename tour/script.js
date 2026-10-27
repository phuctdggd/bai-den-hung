(function(){
    var script = {
 "layout": "absolute",
 "definitions": [{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -54.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03CBF7F2_7CD2_A3E6_41CE_CE148C11746A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.48,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_026106C1_7CD2_A422_41D7_534C1A97BD4F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FFFAAAD9_7CD2_AC22_41C2_B9AD9513492F",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_r866cjr866cjr866",
 "id": "panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA",
 "thumbnailUrl": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -82.7,
   "yaw": -164.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917"
  },
  {
   "backwardYaw": 7.93,
   "yaw": 1.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_24A8E09C_3E60_FD48_41BC_0E14E67B60C5",
  "this.overlay_235AE732_7C72_E466_41C2_8CBE5707AA60"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 35.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FEEE2A0A_7CD2_AC26_41D1_5A2A9AAD3732",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -133.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01FE8662_7CD2_A4E6_41DD_837DDAE5A9E1",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_170130_4",
 "id": "panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93",
 "thumbnailUrl": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -141.92,
   "yaw": 101.02,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F92B313_5368_E531_41AC_CE9167E37F07"
  },
  {
   "backwardYaw": -2.33,
   "yaw": 4.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7E33135E_6D23_AAF6_41BF_73FA7107BC65",
  "this.overlay_79655969_6D22_A6DA_41D3_301F60B2F603"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 63.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FD12F94F_7CD2_AC3E_41C8_1F174A2598A8",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_s6pykds6pykds6py",
 "id": "panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47",
 "thumbnailUrl": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 103.13,
   "yaw": -127.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2C800617_7C55_E42E_41D4_DF038D08CADE"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF557A9C_7CD2_AC22_41DE_4360129AC44C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 60.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07FCE4A5_7CD2_A462_41A0_44AA50E89E59",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1603358740.PHOTOSPHERE",
 "id": "panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7",
 "thumbnailUrl": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 105.27,
   "yaw": -94.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412"
  },
  {
   "backwardYaw": 145.7,
   "yaw": 5.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130"
  },
  {
   "backwardYaw": -119.39,
   "yaw": 134.73,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4D1577C7_7BF7_642E_41D4_B6E8EBEA820F",
  "this.overlay_4C7B13BD_7BF5_7C62_41C4_603E8FB0E136",
  "this.overlay_418C0B34_7BEE_AC62_41D8_53E43247ECD1"
 ]
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1608227550.PHOTOSPHERE",
 "id": "panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9",
 "thumbnailUrl": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 12.85,
   "yaw": -11.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9"
  },
  {
   "backwardYaw": -71.54,
   "yaw": 104.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34"
  },
  {
   "backwardYaw": 134.73,
   "yaw": -119.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_47AC713E_7BEF_7C5E_41C1_8F94452C3211",
  "this.overlay_471A3F1D_7BEE_A422_41A5_1CF08247BA02",
  "this.overlay_4683D61F_7BED_A45E_41A6_9F58FB551ADC"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -76.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02D8F741_7CD2_A422_41DD_2C92AAF2D7F5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 93.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_075D6466_7CD2_A4EE_41DB_E76890B4886C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 23.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF144AC9_7CD2_AC22_41D1_8523A5ADBDC4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -49.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -4.69,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 110.36,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 117.31,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0066E504_7CD2_A422_41D4_0BF2929FD840",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_153806_10",
 "id": "panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0",
 "thumbnailUrl": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -103.61,
   "yaw": 97.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_33E46715_7C53_6422_41CD_75A8215F588E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FFC9CAE9_7CD2_ADE2_41CA_25676AE25F04",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_013A1633_7CD2_A467_41D9_E7573244AB3A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Gemini_Generated_Image_wyllirwyllirwyll",
 "id": "panorama_5F90C997_5368_E530_41D3_87723F41131A",
 "thumbnailUrl": "media/panorama_5F90C997_5368_E530_41D3_87723F41131A_t.jpg",
 "class": "Panorama",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.72,
  "class": "PanoramaCameraPosition",
  "pitch": -9.33
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -87.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF46DA89_7CD2_AC22_41D3_B62129938F39",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -129.04,
  "class": "PanoramaCameraPosition",
  "pitch": -49.42
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Giao l\u1ed9 xanh d\u01b0\u1edbi tr\u1eddi xanh",
 "id": "panorama_5F97802B_5368_E310_41BE_FCB92C904745",
 "thumbnailUrl": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 124.37,
   "yaw": -52.25,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C"
  },
  {
   "backwardYaw": 4.34,
   "yaw": -64.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924"
  },
  {
   "backwardYaw": -5.08,
   "yaw": 10.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F965226_5368_A713_419B_42F207D83AC0"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3F7E4857_7BDF_AC2E_419B_4E0781D0E786",
  "this.overlay_3ED11803_7BDE_AC26_41DC_8FEE51503E73",
  "this.overlay_33B5A754_7BD3_E422_41DD_945E56418423"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC6D8839_7CD2_AC62_41C4_CD1A2E4F4753",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -117.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE49F9CB_7CD2_AC27_41D3_DF8BBAFFEB2F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0174F603_7CD2_A426_41C8_DF1C2FF608B1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_078934E4_7CD2_A5E2_41DA_3AFC7BFA9D52",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC21A86E_7CD2_ACFE_41BA_E7F27E675292",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F90C997_5368_E530_41D3_87723F41131A_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC8B88E7_7CD2_ADEE_41DB_A411B5332C23",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -149.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0.82
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF9E8B2B_7CD2_AC67_41D9_0591574D2040",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 64.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_036C977B_7CD2_A4E6_41C7_EBCB9C8E6324",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 8.24,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 5.22,
    "yawSpeed": 216,
    "pitchSpeed": 108,
    "path": "shortest"
   },
   {
    "targetYaw": -13.62,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 4.34,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_FEFECA1A_7CD2_AC26_41CE_0732ED66104A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 108.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FCA4F8D1_7CD2_AC22_41BA_73B0F1713C8F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 68.82,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_002B8524_7CD2_A462_41D3_4F0EB28AC58E",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1609340560.PHOTOSPHERE",
 "id": "panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34",
 "thumbnailUrl": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.77,
   "yaw": -71.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_46FD798B_7BD3_6C26_41C8_3C9AB688B85F"
 ]
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_172053_0",
 "id": "panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466",
 "thumbnailUrl": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.87,
   "yaw": -55.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C"
  },
  {
   "backwardYaw": -130.05,
   "yaw": 3.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF"
  },
  {
   "backwardYaw": -45.05,
   "yaw": 81.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7635B2CA_6D65_ABD9_41C7_8EB71EC8D7AA",
  "this.overlay_71A78E3B_6D62_FABE_41D9_D68CCF03A018",
  "this.overlay_4EABFD4C_6F25_9EDA_41D3_439EE4003014"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FDA7F98F_7CD2_AC3E_4171_55DDB1228348",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_FC53E85E_7CD2_ACDE_41BF_5C43B2CC7C6A",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1556272210.PHOTOSPHERE",
 "id": "panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C",
 "thumbnailUrl": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -25.46,
   "yaw": -43.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C"
  },
  {
   "backwardYaw": 6.81,
   "yaw": 73.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4AB8297A_7BEE_ECE6_41D5_7D80CCA97428",
  "this.overlay_54042BE7_7BEF_A3EE_41AF_B904569E739B",
  "this.overlay_4BEE882E_7BEE_AC7E_41D1_F7C2BCF76EB3"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0108D642_7CD2_A426_41C2_4BA58850DF39",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.26,
  "class": "PanoramaCameraPosition",
  "pitch": -6.86
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -60.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE5939DA_7CD2_AC26_41DB_A3E32202CEF4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_FD692900_7CD2_AC22_41D9_8871AC2DB952",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 15.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FCC638AD_7CD2_AC62_41D8_E79EF8FF6C99",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 85.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF0BBAC9_7CD2_AC22_41DD_D549FD301EB9",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -63.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01B376A1_7CD2_A462_41D8_33FBB89D3D4D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_018376B3_7CD2_A466_41D1_60E749FB8536",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 57.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FD0CE93B_7CD2_AC66_41B3_124D48A86AD7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 64.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00A24587_7CD2_A42F_41D9_E8228A99AF0C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF880B22_7CD2_AC61_41D4_80067FADE30A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03A9E80E_7CD2_AC3E_41C8_6F9FDA71A2C2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_029CB770_7CD2_A4E2_41DD_50CC8AF4D011",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -112.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FEA1FA49_7CD2_AC22_418F_2F7F8EBD6624",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FCD4D8C4_7CD2_AC22_419C_477107241A7F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01E81652_7CD2_A426_41D8_39E7B118ECD5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 161.71,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 6.31,
    "yawSpeed": 4.81,
    "pitchSpeed": 2.9,
    "path": "shortest"
   },
   {
    "targetYaw": 5.59,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   },
   {
    "targetYaw": -145.41,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 6.54,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_FE6429BB_7CD2_AC66_41D4_4669B21FEFFB",
 "manualRotationSpeed": 2000,
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "xuongdengieng",
 "id": "panorama_5F95C65E_5368_AF30_41A6_78E370A011A3",
 "thumbnailUrl": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 79.28,
   "yaw": 138.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6"
  },
  {
   "backwardYaw": 46.04,
   "yaw": 1.65,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3E884783_30AD_ABE7_41C7_680F1B860301"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_467F10FB_6F65_A7BE_41B0_A589FBB4C7DE",
  "this.overlay_478195D9_6F66_E9FA_41D6_73E55D5C98A9",
  "this.overlay_21C9B71A_7C55_6426_41D0_F90521234676"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FCBB28DF_7CD2_ADDE_41D0_2B93584F8664",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 66.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_019136B3_7CD2_A466_41CF_11B6F2633E74",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC7D9847_7CD2_AC2E_41C4_A53FDD5BA817",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_173737_3",
 "id": "panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F",
 "thumbnailUrl": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -133.36,
   "yaw": 130.47,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3"
  },
  {
   "backwardYaw": 128.63,
   "yaw": -9.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3E884783_30AD_ABE7_41C7_680F1B860301"
  }
 ],
 "hfov": 324.62,
 "partial": true,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4B1E95A2_6F1D_6E4E_41BD_E20811C35CE3",
  "this.overlay_4894B5B5_6F62_EE4A_41C3_01BC5659F43F"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_033717B0_7CD2_A462_41D0_30486F29DE6B",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeVerticalDraggingEnabled": true,
 "viewerArea": "this.MainViewer",
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "displayPlaybackBar": true,
 "mouseControlMode": "drag_acceleration"
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 115.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02C88731_7CD2_A462_41CD_DC4112F2261E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 161.71,
  "class": "PanoramaCameraPosition",
  "pitch": 6.31
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 5.59,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   },
   {
    "targetYaw": -145.41,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 6.54,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_camera",
 "manualRotationSpeed": 2000,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 134.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_F87DFB3E_7CD2_AC5E_41DC_656BE02C13DF",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "denha1",
 "id": "panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248",
 "thumbnailUrl": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.31,
   "yaw": -147.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917"
  },
  {
   "backwardYaw": 144.98,
   "yaw": 0.55,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4F0AF74D_588F_4D6C_41B4_0532FF278E94",
  "this.overlay_4D5FF475_58B1_433D_41CF_AAA6F61E69EC"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_fhfzuffhfzuffhfz",
 "id": "panorama_5F94536A_5368_A513_41CA_EE52E5A4F805",
 "thumbnailUrl": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.55,
   "yaw": 144.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248"
  },
  {
   "backwardYaw": -9.3,
   "yaw": 67.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788"
  },
  {
   "backwardYaw": 134.13,
   "yaw": -33.07,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4168271F_58B7_CEED_41BF_E49FEB8A678E",
  "this.overlay_27A539D9_7C7E_AC22_41DE_204E4701E5E1",
  "this.overlay_1F7157D8_7C7F_E422_41CB_A959EAB9D4C2"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -93.62,
  "class": "PanoramaCameraPosition",
  "pitch": -15.37
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1547588020.PHOTOSPHERE",
 "id": "panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24",
 "thumbnailUrl": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 125.71,
   "yaw": 2.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5"
  },
  {
   "backwardYaw": 114.9,
   "yaw": 54.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C"
  },
  {
   "backwardYaw": 4.64,
   "yaw": -116.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2BA0DD44_7C72_E422_41BD_57C3C0573888",
  "this.overlay_24AF0311_7C73_9C22_41A0_7B4F12770981",
  "this.overlay_26428F48_7C73_A422_41DA_3E3997057F55"
 ]
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_njtfxtnjtfxtnjtf",
 "id": "panorama_5F92B313_5368_E531_41AC_CE9167E37F07",
 "thumbnailUrl": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.02,
   "yaw": -141.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93"
  },
  {
   "backwardYaw": -95.43,
   "yaw": 104.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_78993A27_6D25_BA56_41C8_F88A31CE44D5",
  "this.overlay_7B9EE90A_6D26_E65E_41DA_AC4B2A4A91AA",
  "this.overlay_7A2910D2_6D22_A7CE_41D2_5C5084E418C0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F948C25_5368_6310_41D2_D24F026C120B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 7.96,
  "class": "PanoramaCameraPosition",
  "pitch": -12.9
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3E95517D_30A4_A723_419B_FA42351EA20B_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -94.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FDC12970_7CD2_ACE1_41BD_8B185124371E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67614869_6CE7_66DA_41DB_2102C50014E5_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_jglxmijglxmijglx",
 "id": "panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279",
 "thumbnailUrl": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -34.13,
   "yaw": 0.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A"
  },
  {
   "backwardYaw": -67.49,
   "yaw": -0.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4"
  },
  {
   "backwardYaw": -77.1,
   "yaw": 2.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9"
  },
  {
   "backwardYaw": -115.13,
   "yaw": -2.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF"
  },
  {
   "backwardYaw": -62.34,
   "yaw": 2.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5"
  },
  {
   "backwardYaw": -52.6,
   "yaw": 1.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788"
  },
  {
   "backwardYaw": -34.48,
   "yaw": 0.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B"
  }
 ],
 "hfov": 30,
 "partial": true,
 "pitch": 0,
 "hfovMax": 30,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 11,
      "class": "TiledImageResourceLevel",
      "width": 5632,
      "colCount": 11,
      "height": 5632
     },
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0/f/3/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0/f/4/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "thumbnailUrl": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_t.jpg"
  }
 ],
 "vfov": 14.84,
 "class": "Panorama",
 "overlays": [
  "this.overlay_1BA4D2B4_7CB3_BC61_41D4_7B3F985CEAF2",
  "this.overlay_1BCD73F0_7CB3_63E2_41B1_5B9A9C0D4162",
  "this.overlay_153D8DEF_7CB2_A7FE_4171_601C00286431",
  "this.overlay_15F528EC_7CB2_EDE2_41DA_8825692CD698",
  "this.overlay_16CDA1EB_7CB2_BFE6_4181_81DEAF1A52F7",
  "this.overlay_1A3D2ACF_7CBD_6C3F_41C2_71AAA688075C",
  "this.overlay_1A979E5D_7CBD_A422_41DC_ED9988BE4446",
  "this.overlay_1B34D539_7CBD_E463_41C8_82C1499E26AB"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 110.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE0F99FA_7CD2_AFE6_41D1_D9F3439234AF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07B654D4_7CD2_A422_41BA_DB590A13B33C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 49.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_F86E8B37_7CD2_AC6F_4161_371DACF537C9",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 69.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01541622_7CD2_A466_41D5_7386873CD163",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 117.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00B00587_7CD2_A42F_41DA_8BB79165A455",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "bia v\u0103n h\u00f3a",
 "id": "panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756",
 "thumbnailUrl": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.77,
   "yaw": -129.44,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_t.jpg"
  }
 ],
 "vfov": 151.58,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3628F347_7BB6_9C2E_41CE_1AD7BBB5DCAD"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00388534_7CD2_A462_41CE_7601BD17EBDF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -33.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0144D612_7CD2_A426_41C4_6B243AE7A588",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_174147_4",
 "id": "panorama_3E884783_30AD_ABE7_41C7_680F1B860301",
 "thumbnailUrl": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -9.13,
   "yaw": 128.63,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F"
  },
  {
   "backwardYaw": 1.65,
   "yaw": 46.04,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95C65E_5368_AF30_41A6_78E370A011A3"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4927C231_6F63_EA4A_41CD_1B523610C549",
  "this.overlay_4BF58026_6F62_A656_41D7_D5F8C0C208C8"
 ]
},
{
 "hfovMin": "150%",
 "label": "c\u00f4ng vi\u00ean",
 "id": "panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749",
 "thumbnailUrl": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -56.06,
   "yaw": 92.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F965226_5368_A713_419B_42F207D83AC0"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5CF3D784_7BD5_6422_41DE_DFBAA4A7D903"
 ]
},
{
 "hfovMin": "150%",
 "label": "L\u1ed1i \u0111i c\u00f4ng vi\u00ean d\u01b0\u1edbi n\u1eafng v\u00e0ng",
 "id": "panorama_3E95517D_30A4_A723_419B_FA42351EA20B",
 "thumbnailUrl": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 146.06,
   "yaw": 5.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C"
  },
  {
   "backwardYaw": -110.12,
   "yaw": -134.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7A446A49_6D2F_7ADA_41D9_2DA57A1E6AC6",
  "this.overlay_761980DD_6D2F_E7FA_41AF_B3353F066114"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -19.49,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": -7.67,
    "yawSpeed": 152.47,
    "pitchSpeed": 64.37,
    "path": "shortest"
   },
   {
    "targetYaw": 14.65,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": -8.77,
    "yawSpeed": 33.25,
    "pitchSpeed": 14.49,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_0014E554_7CD2_A422_41D3_09BE094BA456",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Gemini_Generated_Image_ti4j31ti4j31ti4j",
 "id": "panorama_5F93796B_5368_A511_41CC_0045C1A10502",
 "thumbnailUrl": "media/panorama_5F93796B_5368_A511_41CC_0045C1A10502_t.jpg",
 "class": "Panorama",
 "partial": false,
 "pitch": 0
},
{
 "hfovMin": "150%",
 "label": "S\u00e2n ch\u00f9a thanh b\u00ecnh d\u01b0\u1edbi t\u00e1n c\u00e2y xanh",
 "id": "panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788",
 "thumbnailUrl": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 67.97,
   "yaw": -9.3,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805"
  },
  {
   "backwardYaw": 54.56,
   "yaw": 119.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227"
  },
  {
   "backwardYaw": 1.34,
   "yaw": -52.6,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_40FB6A12_58B3_C6F7_41CB_6E1E70B5F9AA",
  "this.overlay_4F0AAC97_588E_C3FC_41C7_BAD54A45FFB0",
  "this.overlay_12603E47_7CF2_A42E_41DA_B4F32F7C98B2"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "quadenha",
 "id": "panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7",
 "thumbnailUrl": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -33.07,
   "yaw": 134.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805"
  },
  {
   "backwardYaw": -119.51,
   "yaw": 1.92,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_440DDF3D_588E_FD2D_41A6_DBB463FFD7A2",
  "this.overlay_444449A7_5891_C5DC_41D5_9DA7AF76C344"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_022646F1_7CD2_A5E2_41C1_D80CBF86B44E",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_fo1w05fo1w05fo1w",
 "id": "panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A",
 "thumbnailUrl": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 85.66,
   "yaw": -3.91,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F"
  },
  {
   "backwardYaw": -113.27,
   "yaw": 134.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03"
  },
  {
   "backwardYaw": 6.52,
   "yaw": -52.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2CFD199C_3E61_8F48_41C3_1142F878ED0D",
  "this.overlay_28E54A4B_3E61_8DC8_41CC_17FDEDEF89CB",
  "this.overlay_2C99E356_7C52_BC2E_41C0_6E69BAAB26C6"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -147.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FDF1596B_7CD2_ACE6_41D1_BBAA20504A65",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_039FE82B_7CD2_AC66_41BE_81DA10324260",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_vdz0lavdz0lavdz0",
 "id": "panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3",
 "thumbnailUrl": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 130.47,
   "yaw": -133.36,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F"
  },
  {
   "backwardYaw": -147.83,
   "yaw": 0.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4A29F46D_6F1E_EEDA_41D8_CF44C4FE7A32",
  "this.overlay_4A7F4FBF_6F1D_79B6_41D5_C8A9E9BF6E0F"
 ]
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_154631_2",
 "id": "panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F",
 "thumbnailUrl": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -144.1,
   "yaw": -107.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4"
  },
  {
   "backwardYaw": -3.91,
   "yaw": 85.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A"
  },
  {
   "backwardYaw": 138.8,
   "yaw": -56.11,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2B138751_3E61_83D8_41A6_32F6C961D20D",
  "this.overlay_27322B63_3E63_83F8_41A6_275C4B1DFC2C",
  "this.overlay_23848156_3E61_9FD8_41A7_DBCF8872AD9E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -57.93,
  "class": "PanoramaCameraPosition",
  "pitch": -3.84
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02147717_7CD2_A42E_41D2_AEDD73E2F3A9",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_fv1e2bfv1e2bfv1e",
 "id": "panorama_3B2B88F5_3064_A523_41BA_8572674890DF",
 "thumbnailUrl": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.81,
   "yaw": -130.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466"
  },
  {
   "backwardYaw": -115.16,
   "yaw": -59.42,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9"
  },
  {
   "backwardYaw": -99.68,
   "yaw": 4.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7"
  },
  {
   "backwardYaw": -2.24,
   "yaw": -115.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4F15741F_6F2F_EE76_41B5_49ABC6B34B74",
  "this.overlay_72EC5E6D_6F2E_BADA_41D0_715A3D5A18C6",
  "this.overlay_7129C3AD_6F22_AA5A_41D5_4B66FB8A83DA",
  "this.overlay_0E6409CA_7CF3_6C26_41C9_C1D695D87C1A"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07A124D4_7CD2_A422_41B3_A14A075FC239",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -80.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC5C584E_7CD2_AC3E_41DA_5EDA2E9BB902",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_d3jp2nd3jp2nd3jp",
 "id": "panorama_5F965226_5368_A713_419B_42F207D83AC0",
 "thumbnailUrl": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": -98.41,
   "yaw": 49.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F948C25_5368_6310_41D2_D24F026C120B"
  },
  {
   "backwardYaw": 10.7,
   "yaw": -5.08,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F97802B_5368_E310_41BE_FCB92C904745"
  },
  {
   "backwardYaw": 34.46,
   "yaw": 116.15,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1"
  },
  {
   "backwardYaw": 92.27,
   "yaw": -56.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5A01A511_7BD2_A422_41D6_B9F633AD9CA6",
  "this.overlay_5B4B5D70_7BD3_A4E2_41D3_57894C91AEFF",
  "this.overlay_64315B00_7BD3_6C22_41B8_A60A4F72F65A",
  "this.overlay_58B66B72_7BD7_6CE6_41C9_15EBBB878DBA",
  "this.overlay_0CEA7CE6_7CED_A5EE_41A9_B6097CBC3896"
 ]
},
{
 "hfovMin": "150%",
 "label": "baotang1",
 "id": "panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E",
 "thumbnailUrl": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 73.94,
   "yaw": -136.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB"
  },
  {
   "backwardYaw": -47.16,
   "yaw": -3.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F950909_5368_A511_41C6_00C9F7D72430"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5DA87836_7BD3_AC6E_41C6_3E5384D3B5CC",
  "this.overlay_5C486441_7BD3_6422_41AF_6DD49BB9E7A9"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 163.08,
  "class": "PanoramaCameraPosition",
  "pitch": -19.49
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 146.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07E904A5_7CD2_A462_41D4_A1AFDA5C2A85",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "c\u1ed5ng n\u00fai \u0111\u1ec1n",
 "id": "panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B",
 "thumbnailUrl": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 44.62,
   "yaw": -137.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB"
  },
  {
   "backwardYaw": 0.4,
   "yaw": -34.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": -136.7,
   "yaw": 10.69,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 14.21,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_t.jpg"
  }
 ],
 "vfov": 151.58,
 "class": "Panorama",
 "overlays": [
  "this.overlay_EB4FD465_FA5A_DB8D_41DE_480C293FF27A",
  "this.overlay_24057C3D_3E61_8548_41B6_5060F9B27C7C",
  "this.overlay_10A1CC31_7CD3_A462_41D7_E4BF2BFA2BA6"
 ]
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1601570070.PHOTOSPHERE",
 "id": "panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130",
 "thumbnailUrl": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -111.18,
   "yaw": -109.78,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD"
  },
  {
   "backwardYaw": 5.87,
   "yaw": 145.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7"
  },
  {
   "backwardYaw": 73.1,
   "yaw": 6.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4813443C_7BFE_A461_41D6_A192C582EFD2",
  "this.overlay_4F7A33ED_7BF2_A3E2_41D2_801C0DE89AFF",
  "this.overlay_4E384687_7BF6_E42E_41D3_F0F912AB1792"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02EAD717_7CD2_A42E_41DA_AA2718B635C0",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_7a8prx7a8prx7a8p",
 "id": "panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB",
 "thumbnailUrl": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -136.84,
   "yaw": 73.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E"
  },
  {
   "backwardYaw": -137.97,
   "yaw": 44.62,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B"
  },
  {
   "backwardYaw": -4.53,
   "yaw": -69.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4D8F401D_5893_42EC_41C2_CD4B6D6E881E",
  "this.overlay_4A96A672_5893_4F37_41D0_6F28A5BAFA06",
  "this.overlay_5FBEA984_7BD5_AC22_41D5_6E9C7333BE67"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -34.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF252AA9_7CD2_AC62_41DD_F932D412CB1C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 43.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FD796908_7CD2_AC22_4197_510D9590D5F0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F965226_5368_A713_419B_42F207D83AC0_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_5jgo5jgo5jgo5jgo",
 "id": "panorama_5F935ED0_5368_7F30_41A7_D3852F272F68",
 "thumbnailUrl": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -78.24,
   "yaw": 108.72,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_61E3D617_7BB3_642E_41A3_D492B7B032A8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -65.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03D9A800_7CD2_AC22_41B6_AD4E46393010",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -45.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 8.24,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 5.22,
    "yawSpeed": 81.12,
    "pitchSpeed": 40.87,
    "path": "shortest"
   },
   {
    "targetYaw": -13.62,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 4.34,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_FD85899D_7CD2_AC22_41CC_DB816EE431E8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 106.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FFD93B00_7CD2_AC22_4192_4DD68AA3DC60",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -11.64,
  "class": "PanoramaCameraPosition",
  "pitch": -9.4
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -4.69,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 110.36,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 117.31,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1605557960.PHOTOSPHERE",
 "id": "panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9",
 "thumbnailUrl": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.45,
   "yaw": -156.32,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_415AA5D7_7BED_E42E_41DA_24CFE010B5AE"
 ]
},
{
 "hfovMin": "150%",
 "label": "b\u00ean trong \u0111\u1ec1n th\u01b0\u1ee3ng",
 "id": "panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7",
 "thumbnailUrl": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 4.26,
   "yaw": -99.68,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_t.jpg"
  }
 ],
 "vfov": 151.58,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7081D720_6F23_6A4A_41DA_AF13C2D417D2"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 112.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00C28574_7CD2_A4E2_41CB_A9AD07383781",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 161.71,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 6.31,
    "yawSpeed": 29.86,
    "pitchSpeed": 15.36,
    "path": "shortest"
   },
   {
    "targetYaw": 5.59,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 1.32,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   },
   {
    "targetYaw": -145.41,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 6.54,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_FD5F491B_7CD2_AC26_4193_70ABEB93D050",
 "manualRotationSpeed": 2000,
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.59,
  "class": "PanoramaCameraPosition",
  "pitch": -2.47
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_163039_1",
 "id": "panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6",
 "thumbnailUrl": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 10.69,
   "yaw": -136.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B"
  },
  {
   "backwardYaw": 1.72,
   "yaw": 7.93,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_271A9B8C_3E60_8348_41C1_79C5BA755A73",
  "this.overlay_2391D232_3E63_9D58_41A4_E5D87B70EEBF"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FFEAEAD9_7CD2_AC22_41CE_B0F8F4C75130",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F934803_5368_A310_4195_6765402C3824_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F934803_5368_A310_4195_6765402C3824_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F934803_5368_A310_4195_6765402C3824_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F934803_5368_A310_4195_6765402C3824_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F934803_5368_A310_4195_6765402C3824_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F934803_5368_A310_4195_6765402C3824_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F934803_5368_A310_4195_6765402C3824_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Gemini_Generated_Image_1i7ntq1i7ntq1i7n",
 "id": "panorama_5F934803_5368_A310_4195_6765402C3824",
 "thumbnailUrl": "media/panorama_5F934803_5368_A310_4195_6765402C3824_t.jpg",
 "class": "Panorama",
 "partial": false,
 "pitch": 0
},
{
 "hfovMin": "150%",
 "label": "conggieng",
 "id": "panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6",
 "thumbnailUrl": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 32.86,
   "yaw": 99.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9"
  },
  {
   "backwardYaw": 85.33,
   "yaw": -5.97,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_6AFFFD9F_7BB7_645E_41DB_A48DA27C28BC",
  "this.overlay_6A9CA70A_7BB5_6426_41D0_E673ECB479A4"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_FD4F2916_7CD2_AC2E_41D1_E5753B81C6C8",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -136.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_030587C0_7CD2_A422_41D4_590BD5EE5A71",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_gs5vtugs5vtugs5v",
 "id": "panorama_5F95D220_5368_E710_41C8_2D1140988ED6",
 "thumbnailUrl": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.9,
   "yaw": -147.83,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3"
  },
  {
   "backwardYaw": 43.28,
   "yaw": 7.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB"
  },
  {
   "backwardYaw": -103.31,
   "yaw": 104.81,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4F47F84E_6F26_A6D6_41BE_95235D70F3BF",
  "this.overlay_4C7C92A9_6F25_6A5A_4149_8659A64FC221",
  "this.overlay_4D260E59_6F22_BAFA_41D3_0E215FB5B39E"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0748D466_7CD2_A4EE_41D1_7030D604C7FE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 38.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_F84DAB58_7CD2_AC22_41D4_A7E98D65F781",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0043C514_7CD2_A422_41DA_A189854EE6A7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01ACC691_7CD2_A422_41B2_3E3244686712",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 175.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01182652_7CD2_A426_41A4_ACD18B711D51",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_vzhut1vzhut1vzhu",
 "id": "panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9",
 "thumbnailUrl": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -52.97,
   "yaw": 6.52,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A"
  },
  {
   "backwardYaw": -148.2,
   "yaw": -145.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2AC12A8B_3E63_8D48_4172_571F351F3ECB",
  "this.overlay_33E603AC_7C53_9C62_41C9_8FE431BA2AE3"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.67,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_F85C1B64_7CD2_ACE2_41D6_A9E5E8BDED2C",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "bhXBx",
 "id": "panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C",
 "thumbnailUrl": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -55.22,
   "yaw": 4.87,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466"
  },
  {
   "backwardYaw": 5.28,
   "yaw": 146.06,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_74CE39EE_6D66_99D6_41CA_F3ABA2829A42",
  "this.overlay_77F6E2B0_6D65_6A4A_41AB_6066AF98DF14"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02FA2721_7CD2_A462_4177_273D5C1E39A1",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3B2B88F5_3064_A523_41BA_8572674890DF_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "c\u1ed5ng ch\u00ednh",
 "id": "panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8",
 "thumbnailUrl": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 0.71,
   "yaw": -34.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": -157.94,
   "yaw": 0.23,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 14.21,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_t.jpg"
  }
 ],
 "vfov": 151.58,
 "class": "Panorama",
 "overlays": [
  "this.overlay_F5E99442_FA47_5B87_41E5_42A10FD8B488",
  "this.overlay_1247C401_7CF3_6422_41CB_7EF77CA109C8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FDD7897B_7CD2_ACE6_41D1_70F74C3C3B01",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07AE14C4_7CD2_A422_41B1_837834D790C7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "dengieng2",
 "id": "panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA",
 "thumbnailUrl": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -149.4,
   "yaw": -121.54,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F935C84_5368_A317_41CA_28B0BB1840E3"
  },
  {
   "backwardYaw": 108.72,
   "yaw": -78.24,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F935ED0_5368_7F30_41A7_D3852F272F68"
  },
  {
   "backwardYaw": -88.39,
   "yaw": -0.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_6F448E7E_7BBF_A4DE_41D9_22A0DCD1D10A",
  "this.overlay_6E684CF5_7BBD_E5E2_41C3_48546470FA67",
  "this.overlay_6276D2DE_7BB3_9DDE_41D1_B7ECDA00B674"
 ]
},
{
 "items": [
  {
   "media": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "camera": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "camera": "this.panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "camera": "this.panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "camera": "this.panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "camera": "this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "camera": "this.panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "camera": "this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "camera": "this.panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "camera": "this.panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "camera": "this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "camera": "this.panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "camera": "this.panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "camera": "this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "camera": "this.panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "camera": "this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "camera": "this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "camera": "this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "camera": "this.panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "camera": "this.panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "camera": "this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "camera": "this.panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "camera": "this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "camera": "this.panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "camera": "this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "camera": "this.panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "camera": "this.panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "camera": "this.panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F92B313_5368_E531_41AC_CE9167E37F07",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "camera": "this.panorama_5F92B313_5368_E531_41AC_CE9167E37F07_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "camera": "this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "camera": "this.panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "camera": "this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "camera": "this.panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "camera": "this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "camera": "this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "camera": "this.panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "camera": "this.panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "camera": "this.panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "camera": "this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "camera": "this.panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "camera": "this.panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 41)",
   "camera": "this.panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_3E884783_30AD_ABE7_41C7_680F1B860301",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 41, 42)",
   "camera": "this.panorama_3E884783_30AD_ABE7_41C7_680F1B860301_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95C65E_5368_AF30_41A6_78E370A011A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 42, 43)",
   "camera": "this.panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 43, 44)",
   "camera": "this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 44, 45)",
   "camera": "this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 45, 46)",
   "camera": "this.panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F935C84_5368_A317_41CA_28B0BB1840E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 46, 47)",
   "camera": "this.panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F935ED0_5368_7F30_41A7_D3852F272F68",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 47, 48)",
   "camera": "this.panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 48, 49)",
   "camera": "this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 49, 50)",
   "camera": "this.panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F965226_5368_A713_419B_42F207D83AC0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 50, 51)",
   "camera": "this.panorama_5F965226_5368_A713_419B_42F207D83AC0_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F948C25_5368_6310_41D2_D24F026C120B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 51, 52)",
   "camera": "this.panorama_5F948C25_5368_6310_41D2_D24F026C120B_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 52, 53)",
   "camera": "this.panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F97802B_5368_E310_41BE_FCB92C904745",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 53, 54)",
   "camera": "this.panorama_5F97802B_5368_E310_41BE_FCB92C904745_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 54, 55)",
   "camera": "this.panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F950909_5368_A511_41C6_00C9F7D72430",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 55, 56)",
   "camera": "this.panorama_5F950909_5368_A511_41C6_00C9F7D72430_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 56, 57)",
   "camera": "this.panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 57, 58)",
   "camera": "this.panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 58, 59)",
   "camera": "this.panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F94468D_5368_EF11_41C5_8C3C7115F919",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 59, 60)",
   "camera": "this.panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F90C997_5368_E530_41D3_87723F41131A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 60, 61)",
   "camera": "this.panorama_5F90C997_5368_E530_41D3_87723F41131A_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 61, 62)",
   "camera": "this.panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F947634_5368_AF77_41D0_4CCE017389FD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 62, 63)",
   "camera": "this.panorama_5F947634_5368_AF77_41D0_4CCE017389FD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F93796B_5368_A511_41CC_0045C1A10502",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 63, 64)",
   "camera": "this.panorama_5F93796B_5368_A511_41CC_0045C1A10502_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 64, 65)",
   "camera": "this.panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 65, 66)",
   "camera": "this.panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 66, 67)",
   "camera": "this.panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 67, 68)",
   "camera": "this.panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 68, 69)",
   "camera": "this.panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 69, 70)",
   "camera": "this.panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 70, 71)",
   "camera": "this.panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 71, 72)",
   "camera": "this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 72, 73)",
   "camera": "this.panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 73, 74)",
   "camera": "this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 74, 75)",
   "camera": "this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 75, 76)",
   "camera": "this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_camera",
   "player": "this.MainViewerPanoramaPlayer"
  },
  {
   "media": "this.panorama_5F934803_5368_A310_4195_6765402C3824",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 76, 0)",
   "camera": "this.panorama_5F934803_5368_A310_4195_6765402C3824_camera",
   "end": "this.trigger('tourEnded')",
   "player": "this.MainViewerPanoramaPlayer"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1559162550.PHOTOSPHERE",
 "id": "panorama_67614869_6CE7_66DA_41DB_2102C50014E5",
 "thumbnailUrl": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -69.1,
   "yaw": -4.53,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB"
  },
  {
   "backwardYaw": 2.87,
   "yaw": 125.71,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_7DB19522_6CE2_AE4E_4189_2C6E73704FA8",
  "this.overlay_78088E9C_6CE2_FA7A_41B8_CD7A1292AC41"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 124.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03E577DF_7CD2_A3DE_41D0_4B468CA2A5AC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_008025E3_7CD2_A7E6_41CE_2FD30EB5C208",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.16,
  "class": "PanoramaCameraPosition",
  "pitch": -0.55
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07D934C4_7CD2_A422_41D6_08948905FBB5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 42.55,
  "class": "PanoramaCameraPosition",
  "pitch": 9.33
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "\u0110\u01b0\u1eddng quanh s\u00e2n b\u00f3ng r\u1ee3p b\u00f3ng c\u00e2y",
 "id": "panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD",
 "thumbnailUrl": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -109.78,
   "yaw": -111.18,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4EC343FF_7BF5_E3DE_41C8_5F96049975CF"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.05,
  "class": "PanoramaCameraPosition",
  "pitch": -9.33
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F92B313_5368_E531_41AC_CE9167E37F07_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1604331310.PHOTOSPHERE",
 "id": "panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412",
 "thumbnailUrl": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -94.2,
   "yaw": 105.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7"
  },
  {
   "backwardYaw": -156.32,
   "yaw": 0.45,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_428AEDEC_7BF2_A7E2_41DC_8414E879D7E2",
  "this.overlay_42BD71F0_7BF3_BFE2_41D0_7F1F171F0903"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 80.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_037C8780_7CD2_A422_41D7_73D28E670393",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_000C1534_7CD2_A462_41CD_17B71BB9FC19",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 102.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00D2C574_7CD2_A4E2_41D0_045F782CC33C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_027726D1_7CD2_A422_41D0_1E3A91A51771",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "S\u00e2n ch\u00f9a thanh b\u00ecnh d\u01b0\u1edbi t\u00e1n c\u00e2y",
 "id": "panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4",
 "thumbnailUrl": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.12,
   "yaw": -95.43,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F92B313_5368_E531_41AC_CE9167E37F07"
  },
  {
   "backwardYaw": -0.08,
   "yaw": -67.49,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": -137.98,
   "yaw": 2.26,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6"
  },
  {
   "backwardYaw": -134.7,
   "yaw": -110.12,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_782C5959_6D27_66FA_41D4_5C9E8E121B13",
  "this.overlay_7821ABD1_6D25_79CA_41D4_5D23A673B6F1",
  "this.overlay_7713D62E_6D23_6A56_41D5_88299B32D93B",
  "this.overlay_0CA0761F_7CF3_E45E_41DD_9D2B7DF453BE"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02A8D741_7CD2_A422_41B0_A79543403723",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE1E6A0A_7CD2_AC26_41D5_C3D4B5A99B62",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03887823_7CD2_AC66_41DC_37383133FA8A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3E884783_30AD_ABE7_41C7_680F1B860301_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01A32691_7CD2_A422_41CD_A79911AF1475",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "dengieng3",
 "id": "panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1",
 "thumbnailUrl": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.84,
   "yaw": -88.39,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA"
  },
  {
   "backwardYaw": 116.15,
   "yaw": 34.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F965226_5368_A713_419B_42F207D83AC0"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_60F90DEA_7BAD_A7E1_41D7_E502498B7324",
  "this.overlay_65D6F744_7BAE_A422_4189_11D6518E0BB2"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -162.43,
  "class": "PanoramaCameraPosition",
  "pitch": -37.89
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95D220_5368_E710_41C8_2D1140988ED6_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 123.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FD1CC94B_7CD2_AC26_41C1_769148A1ECB1",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "bia \u0111\u1ed3ng",
 "id": "panorama_5F948C25_5368_6310_41D2_D24F026C120B",
 "thumbnailUrl": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 49.9,
   "yaw": -98.41,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F965226_5368_A713_419B_42F207D83AC0"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_5D821D65_7BD5_A4E2_41A3_7A916D6F337B"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -130.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC4C484E_7CD2_AC3E_41C4_4263A83A30C8",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_nvpq01nvpq01nvpq",
 "id": "panorama_5F935C84_5368_A317_41CA_28B0BB1840E3",
 "thumbnailUrl": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -121.54,
   "yaw": -149.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA"
  },
  {
   "backwardYaw": 5.22,
   "yaw": 0.35,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_694B9428_7BB3_A461_41D7_1518C8BB2492",
  "this.overlay_6D31C44A_7BB2_E426_41C0_4B850720AE17"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 123.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_073FB48C_7CD2_A422_41CB_A93D7FFC6DD6",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F934803_5368_A310_4195_6765402C3824_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.24,
  "class": "PanoramaCameraPosition",
  "pitch": 5.22
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -13.62,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 4.34,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_a3c7cya3c7cya3c7",
 "id": "panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F",
 "thumbnailUrl": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_t.jpg",
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB"
  },
  {
   "backwardYaw": -122.38,
   "yaw": -0.48,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_327498F2_7BD6_EDE6_41D6_0C810F073BEC",
  "this.overlay_3296CCAD_7BD5_A462_41D0_2DA0D32D8518"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "\u0111\u1ec1n h\u1ea1",
 "id": "panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9",
 "thumbnailUrl": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 99.59,
   "yaw": 32.86,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6"
  },
  {
   "backwardYaw": 2.61,
   "yaw": -77.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": 138.92,
   "yaw": 79.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95C65E_5368_AF30_41A6_78E370A011A3"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_t.jpg"
  }
 ],
 "vfov": 151.58,
 "class": "Panorama",
 "overlays": [
  "this.overlay_74632EDA_7BB6_A426_41D3_B93EF3591995",
  "this.overlay_6FF16B86_7BB7_AC2E_41CA_0E8A8B6BD8BF",
  "this.overlay_12A8A28B_7CF2_9C26_41D1_3C2E611AE3C1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F947634_5368_AF77_41D0_4CCE017389FD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_079E04E4_7CD2_A5E2_41D0_37CC11F4518F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -145.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF76CA89_7CD2_AC22_41B7_E12E6C4246EE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -98.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_004E8514_7CD2_A422_41BB_6959B446D58F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0714A495_7CD2_A422_41C7_6EA520400A3C",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "S\u00e2n ch\u00f9a Vi\u1ec7t truy\u1ec1n th\u1ed1ng d\u01b0\u1edbi n\u1eafng chi\u1ec1u",
 "id": "panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6",
 "thumbnailUrl": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.26,
   "yaw": -137.98,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_74C607D8_6D25_69FA_41CC_E8CCC654BED1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F97802B_5368_E310_41BE_FCB92C904745_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01DC9682_7CD2_A426_41D1_2129F547C7E3",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -106.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07502475_7CD2_A4E2_41D6_6375EAECC30D",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE3F89EA_7CD2_AFE6_41AB_0A4121B11746",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 177.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_0372B790_7CD2_A422_41B1_6037CEBC2D9A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -135.38,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC9A48F4_7CD2_ADE2_41D5_7ABC0A638A40",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "S\u00e2n ch\u00f9a gi\u1eefa r\u1eebng xanh",
 "id": "panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227",
 "thumbnailUrl": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 62.94,
   "yaw": -36.59,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917"
  },
  {
   "backwardYaw": 119.71,
   "yaw": 54.56,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_25506A94_3E60_8D58_41C5_D572ABC705A6",
  "this.overlay_22DD554D_3E6F_87C8_41B6_FC68F80B8EEC"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0724B475_7CD2_A4E2_41D5_7F6054D906EA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 31.8,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_032727B0_7CD2_A462_41B0_C4AD53C2EBB2",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "To\u00e0n c\u1ea3nh s\u00e2n ch\u00f9a d\u01b0\u1edbi t\u00e1n c\u00e2y xanh",
 "id": "panorama_5F94468D_5368_EF11_41C5_8C3C7115F919",
 "thumbnailUrl": "media/panorama_5F94468D_5368_EF11_41C5_8C3C7115F919_t.jpg",
 "class": "Panorama",
 "partial": false,
 "pitch": 0
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_36po4v36po4v36po",
 "id": "panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924",
 "thumbnailUrl": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -0.48,
   "yaw": -122.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F"
  },
  {
   "backwardYaw": -64.54,
   "yaw": 4.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F97802B_5368_E310_41BE_FCB92C904745"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_3385A9D9_7BD6_AC23_41D3_2E035E573429",
  "this.overlay_33CEC8DA_7BD7_6C21_41D8_0A4F5859D9D5"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 145.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": -19.49,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": -7.67,
    "yawSpeed": 157.26,
    "pitchSpeed": 66.37,
    "path": "shortest"
   },
   {
    "targetYaw": 14.65,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": -8.77,
    "yawSpeed": 33.25,
    "pitchSpeed": 14.49,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_00FD8564_7CD2_A4E2_41A8_45545619EC1A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02040701_7CD2_A422_41D9_D033889A2AB7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F93796B_5368_A511_41CC_0045C1A10502_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_024726D1_7CD2_A422_41C0_11FC2EBBC2DA",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 101.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FD3C792B_7CD2_AC66_41D7_98D7FE3D2947",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0762445A_7CD2_A426_41D8_E3CA7A176D5B",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1613591140.PHOTOSPHERE",
 "id": "panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C",
 "thumbnailUrl": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -152.84,
   "yaw": 31.66,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9"
  },
  {
   "backwardYaw": -52.25,
   "yaw": 124.37,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F97802B_5368_E310_41BE_FCB92C904745"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_385DDA5D_7BD3_AC22_41CC_B5756D3B77B2",
  "this.overlay_3D72E1A7_7BDD_7C6E_41DA_096AFA6FA08D"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_076F7456_7CD2_A42E_41C5_5CAFD2BA93AD",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Gemini_Generated_Image_fhdpd0fhdpd0fhdp",
 "id": "panorama_5F947634_5368_AF77_41D0_4CCE017389FD",
 "thumbnailUrl": "media/panorama_5F947634_5368_AF77_41D0_4CCE017389FD_t.jpg",
 "class": "Panorama",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 58.46,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0255A6E1_7CD2_A5E2_41C9_8199319E6F63",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC00587E_7CD2_ACDE_41CB_AFC085323E65",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 46.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC31887E_7CD2_ACDE_41D4_139CECCD1E1E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "targetYaw": -4.69,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in",
    "path": "shortest"
   },
   {
    "targetYaw": 110.36,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "linear",
    "path": "shortest"
   },
   {
    "targetYaw": 117.31,
    "yawSpeed": 5.14,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_out",
    "path": "shortest"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE2929EA_7CD2_AFE6_41D4_6B35A1B52399",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 32.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_007BE504_7CD2_A422_41DE_66A5AD45E8C4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 143.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FCF6D89D_7CD2_AC22_41DD_C311F090C671",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.67,
  "class": "PanoramaCameraPosition",
  "pitch": -0.6
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_kk4uvhkk4uvhkk4u",
 "id": "panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9",
 "thumbnailUrl": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -59.42,
   "yaw": -115.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_739F62FE_6F23_6BB6_41C7_1735237E878C"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 70.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FED29A3A_7CD2_AC66_41DB_59773159F94C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 32.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FCE6F89D_7CD2_AC22_41C8_49090903D615",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_06962451_7CD2_A422_41D1_8CB25BDE49BE",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_FE872A5A_7CD2_AC26_41C5_E9D7661C47E4",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_32opjd32opjd32op",
 "id": "panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5",
 "thumbnailUrl": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 2.37,
   "yaw": -62.34,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": 4.74,
   "yaw": -73.79,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F950909_5368_A511_41C6_00C9F7D72430"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_523156D3_7BDE_A426_41D1_92D97ABACADA",
  "this.overlay_11339CAB_7CED_E466_41DB_47632A767102"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 84.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_02BF6750_7CD2_A422_41C3_E654D7F2BE04",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FFB86B09_7CD2_AC22_41DB_29BFB417D003",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_qd2gbcqd2gbcqd2g",
 "id": "panorama_5F95C4D8_5368_A33F_41D3_5383A774F917",
 "thumbnailUrl": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -147.64,
   "yaw": 1.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248"
  },
  {
   "backwardYaw": -36.59,
   "yaw": 62.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227"
  },
  {
   "backwardYaw": -164.73,
   "yaw": -82.7,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4D633179_5892_C535_41B4_CBBBA89F5E5E",
  "this.overlay_4C2BB39D_5893_C5ED_41CA_7185C0D8BF28",
  "this.overlay_4D95CFB4_588E_BD3C_41A7_DC27FEF2A6B1"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -148.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07C4E4BE_7CD2_A45E_41C9_21937CEB8D72",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1612025420.PHOTOSPHERE",
 "id": "panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9",
 "thumbnailUrl": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -11.36,
   "yaw": 12.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9"
  },
  {
   "backwardYaw": 31.66,
   "yaw": -152.84,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_440F6CAC_7BD5_A462_41D9_88E6B60D0A5D",
  "this.overlay_3AA8CFC7_7BD2_E42E_41DE_756F16E562BD"
 ]
},
{
 "hfovMin": "150%",
 "label": "saucong",
 "id": "panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4",
 "thumbnailUrl": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -35.38,
   "yaw": -0.96,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03"
  },
  {
   "backwardYaw": 0.23,
   "yaw": -157.94,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_30BAAED0_3E60_82D8_41CA_5AB90DFDFBAF",
  "this.overlay_31A215A3_3E63_8778_41A6_A320652123FF"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 60.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF3BAAB9_7CD2_AC62_41C6_48C7634EC173",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.15,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0701D495_7CD2_A422_41DA_3FDC30EE0D4A",
 "automaticZoomSpeed": 10
},
{
 "hfovMax": 130,
 "hfovMin": "150%",
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/f/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/u/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/r/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/b/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/d/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_0/l/1/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_t.jpg"
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "Qu\u1ea3ng tr\u01b0\u1eddng c\u00f4ng vi\u00ean l\u00fac ho\u00e0ng h\u00f4n",
 "id": "panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28",
 "thumbnailUrl": "media/panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_t.jpg",
 "class": "Panorama",
 "partial": false,
 "pitch": 0
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 127.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 8.24,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 5.22,
    "yawSpeed": 176.28,
    "pitchSpeed": 88.23,
    "path": "shortest"
   },
   {
    "targetYaw": -13.62,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": 4.34,
    "yawSpeed": 33.25,
    "pitchSpeed": 17.05,
    "path": "shortest"
   }
  ]
 },
 "id": "camera_0342C790_7CD2_A422_41C0_13F8673D899E",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -125.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0791A4F5_7CD2_A5E3_419D_4B92A5F4FDC0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 30.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_01CE3672_7CD2_A4E6_41C3_3E8D39A304FC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00574524_7CD2_A462_41C7_48E21DDE614C",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_152928_5",
 "id": "panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7",
 "thumbnailUrl": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -127.32,
   "yaw": 103.13,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47"
  },
  {
   "backwardYaw": -145.22,
   "yaw": -148.2,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9"
  },
  {
   "backwardYaw": 97.98,
   "yaw": -103.61,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2E5B06D8_7C52_A422_41D3_1C8F00D0DF32",
  "this.overlay_2CD5A613_7C52_E426_41BD_51DA36A04B6D",
  "this.overlay_2EE2B0BA_7C52_9C66_41B9_2622E9FDBB92"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -19.49,
  "class": "PanoramaCameraPosition",
  "pitch": 6.54
 },
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "targetYaw": 14.65,
    "class": "TargetPanoramaCameraMovement",
    "easing": "cubic_in_out",
    "targetPitch": -8.77,
    "yawSpeed": 33.25,
    "pitchSpeed": 14.49,
    "path": "shortest"
   }
  ]
 },
 "id": "panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_6hutpk6hutpk6hut",
 "id": "panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03",
 "thumbnailUrl": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 134.13,
   "yaw": -113.27,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A"
  },
  {
   "backwardYaw": -0.96,
   "yaw": -35.38,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2C36114C_3E63_9FC8_41AF_F576BF784FF8",
  "this.overlay_2FEFB42F_3E60_8548_41CD_DE6430FE34B0"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 76.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_031537D0_7CD2_A422_41D3_4DA47B8B85B7",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -178.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0775E466_7CD2_A4EE_41C4_DCD6A131ADA7",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_155333_5",
 "id": "panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4",
 "thumbnailUrl": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -107.79,
   "yaw": -144.1,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F"
  },
  {
   "backwardYaw": 3.85,
   "yaw": -3.4,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_2B84CF8B_3E60_8348_41A1_D45A72BCAAA9",
  "this.overlay_2F4C312D_7C56_9C62_41DB_F398F1EBC665"
 ]
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_38xw0q38xw0q38xw",
 "id": "panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264",
 "thumbnailUrl": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 1.92,
   "yaw": -119.51,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7"
  },
  {
   "backwardYaw": 4.63,
   "yaw": -2.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_41250936_5891_453F_41B7_4079346327D0",
  "this.overlay_435AE5D5_5897_4D7D_41BE_AC4E72E553F8"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_0235D701_7CD2_A422_41B3_DD49F761C751",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -41.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FEC30A38_7CD2_AC62_41D0_C124C497EFD5",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 27.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_016655F3_7CD2_A7E6_41AC_3B003623FF03",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -125.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FEB11A5A_7CD2_AC26_4177_8F77964018AF",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_012AC622_7CD2_A466_41DC_13FF47122E12",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 120.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03B81816_7CD2_AC21_41CB_C46B63159BFC",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_qqrbv8qqrbv8qqrb",
 "id": "panorama_5F950909_5368_A511_41C6_00C9F7D72430",
 "thumbnailUrl": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.84,
   "yaw": -47.16,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E"
  },
  {
   "backwardYaw": -73.79,
   "yaw": 4.74,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_53211655_7BDD_A422_41D6_1CAEC413C5E6",
  "this.overlay_50350E53_7BDD_A427_41D6_29120E22B457"
 ]
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_qj1trcqj1trcqj1t",
 "id": "panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226",
 "thumbnailUrl": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -5.97,
   "yaw": 85.33,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6"
  },
  {
   "backwardYaw": 0.35,
   "yaw": 5.22,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F935C84_5368_A317_41CA_28B0BB1840E3"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_69BDEF6F_7BB2_E4FE_41CB_EBD7F5DD1502",
  "this.overlay_6F209EE7_7BB3_65EE_41CC_F029A57562AA"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -169.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FF67DA79_7CD2_ACE2_41D1_7BD74E0FDE3C",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 176.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_028E8760_7CD2_A4E2_41CE_3E6B0228F2D0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -161.43,
  "class": "PanoramaCameraPosition",
  "pitch": -1.37
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 174.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FDB7F997_7CD2_AC2E_418E_A802C58400B8",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "PANO_20261011_155754_7",
 "id": "panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E",
 "thumbnailUrl": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -3.4,
   "yaw": 3.85,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/f/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/u/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/r/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/b/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/d/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0/l/2/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_26778676_3E60_85D8_41CE_A5EFEDDE5BB9"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.62,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_00014544_7CD2_A422_41C5_AE56E1AD9E0F",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 50.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FDE2895B_7CD2_AC26_41BF_A8F1EE2B6480",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F950909_5368_A511_41C6_00C9F7D72430_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 145.52,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_009635EA_7CD2_A7E6_41D9_097B11C7C097",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "DvH9L",
 "id": "panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB",
 "thumbnailUrl": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 81.94,
   "yaw": -45.05,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466"
  },
  {
   "backwardYaw": 7.48,
   "yaw": 43.28,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4D87FC62_6F26_FECE_41C4_C21BBDB11146",
  "this.overlay_4C7AD083_6F27_A64E_41D1_835CA27780FD"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 1.05
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "12",
 "id": "panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D",
 "thumbnailUrl": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -56.11,
   "yaw": 138.8,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F"
  },
  {
   "backwardYaw": -116.35,
   "yaw": 4.64,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279"
  },
  {
   "backwardYaw": -129.44,
   "yaw": -86.77,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 1.05,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_t.jpg"
  }
 ],
 "vfov": 177.89,
 "class": "Panorama",
 "overlays": [
  "this.overlay_30AF83EB_7BB5_63E6_41D2_3695950B8E87",
  "this.overlay_37B04B09_7BB5_EC22_41D3_84A444C9D9BF",
  "this.overlay_1FD83647_7C55_A42E_41D3_4CFE2714C3AA",
  "this.overlay_10BC342C_7CAD_A462_41CE_B9A06A765659"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 81.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FE973A69_7CD2_ACE2_41D8_B4047E9E8103",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F94DAC8_5368_E71F_41BA_3953E4216D28_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_070CB492_7CD2_A426_41D0_A3A174255AE2",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FC10588D_7CD2_AC22_41B7_B39045B780DC",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 168.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_07F164B5_7CD2_A463_41BD_1B05C3ECEA9A",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 52.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_FFA81B09_7CD2_AC22_41C0_62113F8ED9E0",
 "automaticZoomSpeed": 10
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -174.72,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "camera_03FBF7EC_7CD2_A3E2_41DD_854D534735A0",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "150%",
 "label": "Gemini_Generated_Image_oh8uyvoh8uyvoh8u",
 "id": "panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3",
 "thumbnailUrl": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": 104.81,
   "yaw": -103.31,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_0/f/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_0/u/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_0/r/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_0/b/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_0/d/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_0/l/0/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_4AAC2D5D_6F1F_9EFA_41D3_F349EEE307DE"
 ]
},
{
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "initialSequence": {
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_in"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "linear"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "class": "DistancePanoramaCameraMovement",
    "easing": "cubic_out"
   }
  ],
  "restartMovementOnUserInteraction": false,
  "class": "PanoramaCameraSequence"
 },
 "id": "panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_camera",
 "automaticZoomSpeed": 10
},
{
 "hfovMin": "120%",
 "label": "SGCAM_20261022_1550146830.PHOTOSPHERE",
 "id": "panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C",
 "thumbnailUrl": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_t.jpg",
 "adjacentPanoramas": [
  {
   "backwardYaw": -43.32,
   "yaw": -25.46,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C"
  },
  {
   "backwardYaw": 54.84,
   "yaw": 114.9,
   "class": "AdjacentPanorama",
   "distance": 1,
   "panorama": "this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24"
  }
 ],
 "hfov": 360,
 "partial": false,
 "pitch": 0,
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/f/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/f/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/f/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/f/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/u/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/u/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/u/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/u/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/r/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/r/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/r/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/r/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/b/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/b/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/b/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/b/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/d/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/d/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/d/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/d/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/l/0/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 6,
      "class": "TiledImageResourceLevel",
      "width": 3072,
      "colCount": 6,
      "height": 3072
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/l/1/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "colCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/l/2/{row}_{column}.jpg",
      "tags": "ondemand",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_0/l/3/{row}_{column}.jpg",
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_t.jpg"
  }
 ],
 "vfov": 180,
 "class": "Panorama",
 "overlays": [
  "this.overlay_57934854_7BD5_EC22_4151_4CBB12A5CC1E",
  "this.overlay_55336A38_7BD5_6C62_41D2_7D0A9F15590B"
 ]
},
{
 "minHeight": 50,
 "toolTipPaddingRight": 6,
 "data": {
  "name": "Main Viewer"
 },
 "toolTipBorderSize": 1,
 "id": "MainViewer",
 "toolTipPaddingTop": 4,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "progressBorderRadius": 0,
 "toolTipPaddingLeft": 6,
 "width": "100%",
 "borderRadius": 0,
 "toolTipDisplayTime": 600,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "paddingLeft": 0,
 "toolTipBorderRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 15,
 "progressBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "playbackBarHeadShadowHorizontalLength": 0,
 "progressBorderColor": "#000000",
 "progressBarBackgroundColorRatios": [
  0
 ],
 "playbackBarBottom": 5,
 "progressBarBorderColor": "#000000",
 "toolTipShadowSpread": 0,
 "playbackBarHeadOpacity": 1,
 "toolTipBorderColor": "#767676",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "height": "100%",
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "toolTipTextShadowColor": "#000000",
 "transitionMode": "blending",
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "progressBarBorderSize": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipShadowHorizontalLength": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowVerticalLength": 0,
 "shadow": false,
 "toolTipShadowColor": "#333333",
 "playbackBarBorderRadius": 0,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipShadowOpacity": 1,
 "paddingRight": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "borderSize": 0,
 "toolTipFontFamily": "Arial",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "displayTooltipInTouchScreens": true,
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "minWidth": 100,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "paddingBottom": 0,
 "progressHeight": 10,
 "playbackBarHeadShadow": true,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "paddingTop": 0,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "toolTipFontColor": "#606060",
 "transitionDuration": 500,
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "playbackBarHeadShadowOpacity": 0.7
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.08,
   "yaw": 1.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.08,
   "image": "this.AnimatedImageResource_1F287C98_3E61_8548_41B0_A7BF9C614865",
   "pitch": -33.29,
   "yaw": 1.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_24A8E09C_3E60_FD48_41BC_0E14E67B60C5",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6, this.camera_07AE14C4_7CD2_A422_41B1_837834D790C7); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.37,
   "yaw": -164.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.37,
   "image": "this.AnimatedImageResource_0E0F9088_7CAE_9C22_41D4_B1C63BE17462",
   "pitch": -25.34,
   "yaw": -164.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_235AE732_7C72_E466_41C2_8CBE5707AA60",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917, this.camera_07D934C4_7CD2_A422_41D6_08948905FBB5); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.72,
   "yaw": 4.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.72,
   "image": "this.AnimatedImageResource_229B4AE4_7BAD_ADE2_41DE_62A25D2D0C2C",
   "pitch": -39.83,
   "yaw": 4.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7E33135E_6D23_AAF6_41BF_73FA7107BC65",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264, this.camera_F85C1B64_7CD2_ACE2_41D6_A9E5E8BDED2C); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.03,
   "yaw": 101.02,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.03,
   "image": "this.AnimatedImageResource_229ADAE4_7BAD_ADE2_419D_E18A9E3C5105",
   "pitch": -23.53,
   "yaw": 101.02,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_79655969_6D22_A6DA_41D3_301F60B2F603",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F92B313_5368_E531_41AC_CE9167E37F07, this.camera_F84DAB58_7CD2_AC22_41D4_A7E98D65F781); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.92,
   "yaw": -127.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.92,
   "image": "this.AnimatedImageResource_2F3A8653_7C57_6426_41D8_230756140D1B",
   "pitch": -21.48,
   "yaw": -127.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2C800617_7C55_E42E_41D4_DF038D08CADE",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7, this.camera_02D8F741_7CD2_A422_41DD_2C92AAF2D7F5); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.49,
   "yaw": 5.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.86
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.49,
   "image": "this.AnimatedImageResource_226DAAF4_7BAD_ADE2_41D8_8D36CC691DAD",
   "pitch": -18.86,
   "yaw": 5.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D1577C7_7BF7_642E_41D4_B6E8EBEA820F",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130, this.camera_FF252AA9_7CD2_AC62_41DD_F932D412CB1C); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.74,
   "yaw": -94.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -32.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.74,
   "image": "this.AnimatedImageResource_226CCB04_7BAD_AC22_41DE_EC5D3CFAC868",
   "pitch": -32.36,
   "yaw": -94.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C7B13BD_7BF5_7C62_41C4_603E8FB0E136",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412, this.camera_FF557A9C_7CD2_AC22_41DE_4360129AC44C); this.mainPlayList.set('selectedIndex', 70)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 30.05,
   "yaw": 134.73,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.05,
   "image": "this.AnimatedImageResource_226C1B04_7BAD_AC22_41D2_E8BA0EA00FB9",
   "pitch": -29.08,
   "yaw": 134.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_418C0B34_7BEE_AC62_41D8_53E43247ECD1",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9, this.camera_FF3BAAB9_7CD2_AC62_41C6_48C7634EC173); this.mainPlayList.set('selectedIndex', 71)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.71,
   "yaw": 104.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.71,
   "image": "this.AnimatedImageResource_22760AF4_7BAD_ADE2_41D1_053493B3B67E",
   "pitch": -21.52,
   "yaw": 104.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_47AC713E_7BEF_7C5E_41C1_8F94452C3211",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34, this.camera_FCA4F8D1_7CD2_AC22_41BA_73B0F1713C8F); this.mainPlayList.set('selectedIndex', 72)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.83,
   "yaw": -11.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.83,
   "image": "this.AnimatedImageResource_22715AF4_7BAD_ADE2_41A8_84577DD0AEC4",
   "pitch": -23.94,
   "yaw": -11.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_471A3F1D_7BEE_A422_41A5_1CF08247BA02",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9, this.camera_FCD4D8C4_7CD2_AC22_419C_477107241A7F); this.mainPlayList.set('selectedIndex', 68)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.1,
   "yaw": -119.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.1,
   "image": "this.AnimatedImageResource_2270CAF4_7BAD_ADE2_41B3_83F6C5A3A4F9",
   "pitch": -38.13,
   "yaw": -119.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4683D61F_7BED_A45E_41A6_9F58FB551ADC",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7, this.camera_FCBB28DF_7CD2_ADDE_41D0_2B93584F8664); this.mainPlayList.set('selectedIndex', 74)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.26,
   "yaw": 97.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.26,
   "image": "this.AnimatedImageResource_2F3AE653_7C57_6426_41DB_D6D9F7E1EF06",
   "pitch": -27.54,
   "yaw": 97.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_33E46715_7C53_6422_41CD_75A8215F588E",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7, this.camera_00574524_7CD2_A462_41C7_48E21DDE614C); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.32,
   "yaw": 10.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.78
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.32,
   "image": "this.AnimatedImageResource_2282DAF4_7BAD_ADE2_41DB_B14C9DB1F5F5",
   "pitch": -16.78,
   "yaw": 10.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3F7E4857_7BDF_AC2E_419B_4E0781D0E786",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F965226_5368_A713_419B_42F207D83AC0, this.camera_FDB7F997_7CD2_AC2E_418E_A802C58400B8); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.93,
   "yaw": -52.25,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.93,
   "image": "this.AnimatedImageResource_22824AF4_7BAD_ADE2_41C1_93C1451A8B7C",
   "pitch": -33.53,
   "yaw": -52.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3ED11803_7BDE_AC26_41DC_8FEE51503E73",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C, this.camera_FDD7897B_7CD2_ACE6_41D1_70F74C3C3B01); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.81,
   "yaw": -64.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.81,
   "image": "this.AnimatedImageResource_227DEAF4_7BAD_ADE2_41D3_0322118B6248",
   "pitch": -13.47,
   "yaw": -64.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_33B5A754_7BD3_E422_41DD_945E56418423",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924, this.camera_FDA7F98F_7CD2_AC3E_4171_55DDB1228348); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.43,
   "yaw": -71.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.43,
   "image": "this.AnimatedImageResource_22703AF4_7BAD_ADE2_41D2_570DB8BB6DF4",
   "pitch": -2.56,
   "yaw": -71.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_46FD798B_7BD3_6C26_41C8_3C9AB688B85F",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9, this.camera_FC10588D_7CD2_AC22_41B7_B39045B780DC); this.mainPlayList.set('selectedIndex', 71)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.89,
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.96
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.89,
   "image": "this.AnimatedImageResource_22915AE4_7BAD_ADE2_41CC_2FE160BB56DA",
   "pitch": -14.96,
   "yaw": 3.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7635B2CA_6D65_ABD9_41C7_8EB71EC8D7AA",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF, this.camera_F86E8B37_7CD2_AC6F_4161_371DACF537C9); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.03,
   "yaw": -55.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.03,
   "image": "this.AnimatedImageResource_2290DAE4_7BAD_ADE2_41D6_DFF9DA1C8E8C",
   "pitch": -13.44,
   "yaw": -55.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_71A78E3B_6D62_FABE_41D9_D68CCF03A018",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C, this.camera_FF9E8B2B_7CD2_AC67_41D9_0591574D2040); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.32,
   "yaw": 81.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.32,
   "image": "this.AnimatedImageResource_2290BAE4_7BAD_ADE2_41CC_1810CFEE9802",
   "pitch": -25.04,
   "yaw": 81.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4EABFD4C_6F25_9EDA_41D3_439EE4003014",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB, this.camera_F87DFB3E_7CD2_AC5E_41DC_656BE02C13DF); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.37,
   "yaw": -43.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.37,
   "image": "this.AnimatedImageResource_2278CAF4_7BAD_ADE2_41BC_47ECD9C984AB",
   "pitch": -24.67,
   "yaw": -43.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4AB8297A_7BEE_ECE6_41D5_7D80CCA97428",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C, this.camera_0235D701_7CD2_A422_41B3_DD49F761C751); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.72,
   "yaw": 19.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.72,
   "image": "this.AnimatedImageResource_22787AF4_7BAD_ADE2_41C8_570D0A120944",
   "pitch": -17.62,
   "yaw": 19.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_54042BE7_7BEF_A3EE_41AF_B904569E739B",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.3,
   "yaw": 73.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.3,
   "image": "this.AnimatedImageResource_227BCAF4_7BAD_ADE2_41CB_6DB67309A00D",
   "pitch": -24.49,
   "yaw": 73.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4BEE882E_7BEE_AC7E_41D1_F7C2BCF76EB3",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130, this.camera_02040701_7CD2_A422_41D9_D033889A2AB7); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.69,
   "yaw": 1.65,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.69,
   "image": "this.AnimatedImageResource_2289AAE4_7BAD_ADE2_41D1_083B64221301",
   "pitch": -16.97,
   "yaw": 1.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_467F10FB_6F65_A7BE_41B0_A589FBB4C7DE",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E884783_30AD_ABE7_41C7_680F1B860301, this.camera_01FE8662_7CD2_A4E6_41DD_837DDAE5A9E1); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.91,
   "yaw": 138.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -48.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.91,
   "image": "this.AnimatedImageResource_2288CAE4_7BAD_ADE2_41C5_E9D977178A30",
   "pitch": -48.89,
   "yaw": 138.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_478195D9_6F66_E9FA_41D6_73E55D5C98A9",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9, this.camera_01E81652_7CD2_A426_41D8_39E7B118ECD5); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.29,
   "yaw": 171.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.29,
   "image": "this.AnimatedImageResource_0E7B2088_7CAE_9C22_41D4_8D81FA4CFCBB",
   "pitch": -22.68,
   "yaw": 171.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_21C9B71A_7C55_6426_41D0_F90521234676",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.28,
   "yaw": 130.47,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.28,
   "image": "this.AnimatedImageResource_228FBAE4_7BAD_ADE2_41D3_49C9363A8C17",
   "pitch": -24.42,
   "yaw": 130.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4B1E95A2_6F1D_6E4E_41BD_E20811C35CE3",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3, this.camera_FC31887E_7CD2_ACDE_41D4_139CECCD1E1E); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.92,
   "yaw": -9.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.6
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.92,
   "image": "this.AnimatedImageResource_228F2AE4_7BAD_ADE2_41D3_062B2D39C7C1",
   "pitch": -26.6,
   "yaw": -9.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4894B5B5_6F62_EE4A_41C3_01BC5659F43F",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E884783_30AD_ABE7_41C7_680F1B860301, this.camera_FC00587E_7CD2_ACDE_41CB_AFC085323E65); this.mainPlayList.set('selectedIndex', 41)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.86,
   "yaw": 0.55,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.86,
   "image": "this.AnimatedImageResource_229E0AE4_7BAD_ADE2_41D4_93EB64F6FBA9",
   "pitch": -21.76,
   "yaw": 0.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4F0AF74D_588F_4D6C_41B4_0532FF278E94",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805, this.camera_FFFAAAD9_7CD2_AC22_41C2_B9AD9513492F); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.54,
   "yaw": -147.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_1_HS_1_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -59.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.54,
   "image": "this.AnimatedImageResource_22999AE4_7BAD_ADE2_41C1_FF3B6EB49D62",
   "pitch": -59.63,
   "yaw": -147.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4D5FF475_58B1_433D_41CF_AAA6F61E69EC",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917, this.camera_FFEAEAD9_7CD2_AC22_41CE_B0F8F4C75130); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.16,
   "yaw": -33.07,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.16,
   "image": "this.AnimatedImageResource_1ADEB136_7C7E_FC6E_41D5_F3E451E81F31",
   "pitch": -13.88,
   "yaw": -33.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4168271F_58B7_CEED_41BF_E49FEB8A678E",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7, this.camera_078934E4_7CD2_A5E2_41DA_3AFC7BFA9D52); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.31,
   "yaw": 144.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.31,
   "image": "this.AnimatedImageResource_1ADEC136_7C7E_FC6E_41A8_C31022F5AFB4",
   "pitch": -25.62,
   "yaw": 144.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_27A539D9_7C7E_AC22_41DE_204E4701E5E1",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248, this.camera_07A124D4_7CD2_A422_41B3_A14A075FC239); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.8,
   "yaw": 67.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.8,
   "image": "this.AnimatedImageResource_1ADD6136_7C7E_FC6E_41CF_5387C6FDD36E",
   "pitch": -27.61,
   "yaw": 67.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1F7157D8_7C7F_E422_41CB_A959EAB9D4C2",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788, this.camera_07B654D4_7CD2_A422_41BA_DB590A13B33C); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.82,
   "yaw": 2.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.82,
   "image": "this.AnimatedImageResource_18D5FA3F_7C76_AC5E_41D8_767085046F23",
   "pitch": -8.18,
   "yaw": 2.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2BA0DD44_7C72_E422_41BD_57C3C0573888",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5, this.camera_03CBF7F2_7CD2_A3E6_41CE_CE148C11746A); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.1,
   "yaw": -116.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.1,
   "image": "this.AnimatedImageResource_18D46A3F_7C76_AC5E_4191_8783BAE888A3",
   "pitch": -23.3,
   "yaw": -116.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_24AF0311_7C73_9C22_41A0_7B4F12770981",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D, this.camera_03A9E80E_7CD2_AC3E_41C8_6F9FDA71A2C2); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.31,
   "yaw": 54.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.31,
   "image": "this.AnimatedImageResource_18D42A3F_7C76_AC5E_41D8_E7E9411719A8",
   "pitch": -15.56,
   "yaw": 54.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_26428F48_7C73_A422_41DA_3E3997057F55",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C, this.camera_03D9A800_7CD2_AC22_41B6_AD4E46393010); this.mainPlayList.set('selectedIndex', 66)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.22,
   "yaw": 104.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.22,
   "image": "this.AnimatedImageResource_229AAAE4_7BAD_ADE2_41B6_BE6C12F140D9",
   "pitch": -13.13,
   "yaw": 104.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_78993A27_6D25_BA56_41C8_F88A31CE44D5",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4, this.camera_02BF6750_7CD2_A422_41C3_E654D7F2BE04); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.95,
   "yaw": -141.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -47.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.95,
   "image": "this.AnimatedImageResource_229A2AE4_7BAD_ADE2_41BC_580AE24AA798",
   "pitch": -47.51,
   "yaw": -141.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7B9EE90A_6D26_E65E_41DA_AC4B2A4A91AA",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93, this.camera_02A8D741_7CD2_A422_41B0_A79543403723); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.42,
   "yaw": 37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.67
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.42,
   "image": "this.AnimatedImageResource_22958AE4_7BAD_ADE2_41D0_7FDEAF5ACB0E",
   "pitch": -18.67,
   "yaw": 37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7A2910D2_6D22_A7CE_41D2_5C5084E418C0",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.9,
   "yaw": 0.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.9,
   "image": "this.AnimatedImageResource_0E1E107D_7CAE_9CE2_41D8_8892C72A4D3A",
   "pitch": -5.5,
   "yaw": 0.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1BA4D2B4_7CB3_BC61_41D4_7B3F985CEAF2",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8, this.camera_00FD8564_7CD2_A4E2_41A8_45545619EC1A); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 3.91,
   "yaw": 0.14,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -2.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 3.91,
   "image": "this.AnimatedImageResource_0E1F307D_7CAE_9CE2_41C4_33300417CB16",
   "pitch": -2.7,
   "yaw": 0.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1BCD73F0_7CB3_63E2_41B1_5B9A9C0D4162",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 1.81,
   "yaw": 0.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.81,
   "image": "this.AnimatedImageResource_063ED3D8_7CD2_9C22_41DF_19088F15C5E5",
   "pitch": 1.45,
   "yaw": 0.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_153D8DEF_7CB2_A7FE_4171_601C00286431",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B, this.camera_009635EA_7CD2_A7E6_41D9_097B11C7C097); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 2.04,
   "yaw": 1.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.04,
   "image": "this.AnimatedImageResource_063F43D8_7CD2_9C22_41C3_4EC5462C87DF",
   "pitch": 2.3,
   "yaw": 1.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_15F528EC_7CB2_EDE2_41DA_8825692CD698",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788, this.camera_008025E3_7CD2_A7E6_41CE_2FD30EB5C208); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 2.11,
   "yaw": -2.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.11,
   "image": "this.AnimatedImageResource_063F33D8_7CD2_9C22_41A7_D9C3EEAA43C8",
   "pitch": 3.66,
   "yaw": -2.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_16CDA1EB_7CB2_BFE6_4181_81DEAF1A52F7",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF, this.camera_00A24587_7CD2_A42F_41D9_E8228A99AF0C); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 1.88,
   "yaw": -0.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 2.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.88,
   "image": "this.AnimatedImageResource_063F93D8_7CD2_9C22_41D2_2D12C14DA57F",
   "pitch": 2.89,
   "yaw": -0.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A3D2ACF_7CBD_6C3F_41C2_71AAA688075C",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4, this.camera_00C28574_7CD2_A4E2_41CB_A9AD07383781); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 1.99,
   "yaw": 2.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_6_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 1.99,
   "image": "this.AnimatedImageResource_063803D8_7CD2_9C22_41D0_318F3532AC25",
   "pitch": 3.31,
   "yaw": 2.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1A979E5D_7CBD_A422_41DC_ED9988BE4446",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9, this.camera_00D2C574_7CD2_A4E2_41D0_045F782CC33C); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 2.36,
   "yaw": 2.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_7_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.75
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 2.36,
   "image": "this.AnimatedImageResource_063893D8_7CD2_9C22_41D9_C2496736B178",
   "pitch": 0.75,
   "yaw": 2.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_1B34D539_7CBD_E463_41C8_82C1499E26AB",
 "data": {
  "label": "Arrow 07bRAWCONTENTTDV"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5, this.camera_00B00587_7CD2_A42F_41DA_8BB79165A455); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 32.08,
   "yaw": -129.44,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.08,
   "image": "this.AnimatedImageResource_22A13ADA_7BAD_AC26_41C0_47927308B07A",
   "pitch": -11.7,
   "yaw": -129.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3628F347_7BB6_9C2E_41CE_1AD7BBB5DCAD",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D, this.camera_075D6466_7CD2_A4EE_41DB_E76890B4886C); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.19,
   "yaw": 128.63,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -41.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.19,
   "image": "this.AnimatedImageResource_228EBAE4_7BAD_ADE2_41BD_589BEE1787ED",
   "pitch": -41.51,
   "yaw": 128.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4927C231_6F63_EA4A_41CD_1B523610C549",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F, this.camera_FE2929EA_7CD2_AFE6_41D4_6B35A1B52399); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.11,
   "yaw": 46.04,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.11,
   "image": "this.AnimatedImageResource_228E2AE4_7BAD_ADE2_41C3_0C5AB92AE273",
   "pitch": -40.27,
   "yaw": 46.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4BF58026_6F62_A656_41D7_D5F8C0C208C8",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95C65E_5368_AF30_41A6_78E370A011A3, this.camera_FE3F89EA_7CD2_AFE6_41AB_0A4121B11746); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 30.69,
   "yaw": 92.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.69,
   "image": "this.AnimatedImageResource_2283AAF4_7BAD_ADE2_41D6_E46F770318BD",
   "pitch": -19.22,
   "yaw": 92.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5CF3D784_7BD5_6422_41DE_DFBAA4A7D903",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F965226_5368_A713_419B_42F207D83AC0, this.camera_073FB48C_7CD2_A422_41CB_A93D7FFC6DD6); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 9.84,
   "yaw": -134.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -68.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.84,
   "image": "this.AnimatedImageResource_22974AE4_7BAD_ADE2_41C0_238C793D46F7",
   "pitch": -68.43,
   "yaw": -134.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7A446A49_6D2F_7ADA_41D9_2DA57A1E6AC6",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4, this.camera_01541622_7CD2_A466_41D5_7386873CD163); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.67,
   "yaw": 5.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.67,
   "image": "this.AnimatedImageResource_2296CAE4_7BAD_ADE2_41D9_0DC4130BF857",
   "pitch": -27.14,
   "yaw": 5.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_761980DD_6D2F_E7FA_41AF_B3353F066114",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C, this.camera_0144D612_7CD2_A426_41C4_6B243AE7A588); this.mainPlayList.set('selectedIndex', 31)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.97,
   "yaw": -9.3,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.97,
   "image": "this.AnimatedImageResource_2299CAE4_7BAD_ADE2_41DC_F10898E959D2",
   "pitch": -21.12,
   "yaw": -9.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_40FB6A12_58B3_C6F7_41CB_6E1E70B5F9AA",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805, this.camera_FEA1FA49_7CD2_AC22_418F_2F7F8EBD6624); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.5,
   "yaw": 119.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0_HS_1_0_0_map.gif",
      "width": 26,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -55.35
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.5,
   "image": "this.AnimatedImageResource_2299AAE4_7BAD_ADE2_41C8_3E4A202E7021",
   "pitch": -55.35,
   "yaw": 119.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4F0AAC97_588E_C3FC_41C7_BAD54A45FFB0",
 "data": {
  "label": "Arrow 02b Right"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227, this.camera_FEB11A5A_7CD2_AC26_4177_8F77964018AF); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.03,
   "yaw": -52.6,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0_HS_2_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 26.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0_HS_2_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 74
     }
    ]
   },
   "pitch": 26.82,
   "yaw": -52.6,
   "distance": 50
  }
 ],
 "id": "overlay_12603E47_7CF2_A42E_41DA_B4F32F7C98B2",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_FE872A5A_7CD2_AC26_41C5_E9D7661C47E4); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.9,
   "yaw": 134.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -49.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.9,
   "image": "this.AnimatedImageResource_22992AE4_7BAD_ADE2_41D5_4E1B765DDC45",
   "pitch": -49.97,
   "yaw": 134.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_440DDF3D_588E_FD2D_41A6_DBB463FFD7A2",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F94536A_5368_A513_41CA_EE52E5A4F805, this.camera_07E904A5_7CD2_A462_41D4_A1AFDA5C2A85); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.3,
   "yaw": 1.92,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.08
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.3,
   "image": "this.AnimatedImageResource_22989AE4_7BAD_ADE2_41CB_D5661D182FB1",
   "pitch": -9.08,
   "yaw": 1.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_444449A7_5891_C5DC_41D5_9DA7AF76C344",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264, this.camera_07FCE4A5_7CD2_A462_41A0_44AA50E89E59); this.mainPlayList.set('selectedIndex', 25)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.68,
   "yaw": -3.91,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -8.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.68,
   "image": "this.AnimatedImageResource_1F333C96_3E61_8558_41C2_6DB6548C478E",
   "pitch": -8.38,
   "yaw": -3.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2CFD199C_3E61_8F48_41C3_1142F878ED0D",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F, this.camera_018376B3_7CD2_A466_41D1_60E749FB8536); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.83,
   "yaw": 134.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.83,
   "image": "this.AnimatedImageResource_1F325C96_3E61_8558_41C1_923928DF986F",
   "pitch": -23.41,
   "yaw": 134.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_28E54A4B_3E61_8DC8_41CC_17FDEDEF89CB",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03, this.camera_019136B3_7CD2_A466_41CF_11B6F2633E74); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.32,
   "yaw": -52.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0_HS_3_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.32,
   "image": "this.AnimatedImageResource_2F34A653_7C57_6426_41DE_32208BEC77A5",
   "pitch": -25.55,
   "yaw": -52.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2C99E356_7C52_BC2E_41C0_6E69BAAB26C6",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9, this.camera_026106C1_7CD2_A422_41D7_534C1A97BD4F); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.45,
   "yaw": 0.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.45,
   "image": "this.AnimatedImageResource_228C5AE4_7BAD_ADE2_41C5_FC47D3CBCC57",
   "pitch": -31.99,
   "yaw": 0.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4A29F46D_6F1E_EEDA_41D8_CF44C4FE7A32",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6, this.camera_007BE504_7CD2_A422_41DE_66A5AD45E8C4); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.81,
   "yaw": -133.36,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.81,
   "image": "this.AnimatedImageResource_228C2AE4_7BAD_ADE2_41D5_3AB8829ECB22",
   "pitch": -46.09,
   "yaw": -133.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4A7F4FBF_6F1D_79B6_41D5_C8A9E9BF6E0F",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F, this.camera_0066E504_7CD2_A422_41D4_0BF2929FD840); this.mainPlayList.set('selectedIndex', 40)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.38,
   "yaw": -56.11,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.38,
   "image": "this.AnimatedImageResource_1F34CC97_3E61_8558_41C2_74B74C8343E3",
   "pitch": -9.64,
   "yaw": -56.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2B138751_3E61_83D8_41A6_32F6C961D20D",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D, this.camera_FEC30A38_7CD2_AC62_41D0_C124C497EFD5); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.42,
   "yaw": -107.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.22
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.42,
   "image": "this.AnimatedImageResource_2F397653_7C57_6426_41CF_3F108DF3A315",
   "pitch": -22.22,
   "yaw": -107.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_27322B63_3E63_83F8_41A6_275C4B1DFC2C",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4, this.camera_FEEE2A0A_7CD2_AC26_41D1_5A2A9AAD3732); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 30.81,
   "yaw": 85.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 30.81,
   "image": "this.AnimatedImageResource_22A6CADA_7BAD_AC26_41D3_7F5AE2159728",
   "pitch": -31.25,
   "yaw": 85.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_23848156_3E61_9FD8_41A7_DBCF8872AD9E",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A, this.camera_FEFECA1A_7CD2_AC26_41CE_0732ED66104A); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.86,
   "yaw": -59.42,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.86,
   "image": "this.AnimatedImageResource_22918AE4_7BAD_ADE2_41D5_D5936E2A21B2",
   "pitch": -14.84,
   "yaw": -59.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4F15741F_6F2F_EE76_41B5_49ABC6B34B74",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9, this.camera_036C977B_7CD2_A4E6_41C7_EBCB9C8E6324); this.mainPlayList.set('selectedIndex', 34)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.85,
   "yaw": 4.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.88
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.85,
   "image": "this.AnimatedImageResource_22910AE4_7BAD_ADE2_41DB_07313C770B25",
   "pitch": -20.88,
   "yaw": 4.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_72EC5E6D_6F2E_BADA_41D0_715A3D5A18C6",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7, this.camera_037C8780_7CD2_A422_41D7_73D28E670393); this.mainPlayList.set('selectedIndex', 35)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.18,
   "yaw": -130.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.18,
   "image": "this.AnimatedImageResource_2290EAE4_7BAD_ADE2_41DC_27BB71071E4B",
   "pitch": -39.21,
   "yaw": -130.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7129C3AD_6F22_AA5A_41D5_4B66FB8A83DA",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466, this.camera_029CB770_7CD2_A4E2_41DD_50CC8AF4D011); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.61,
   "yaw": -115.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_3_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 18.33
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.61,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_3_0.png",
      "width": 99,
      "class": "ImageResourceLevel",
      "height": 58
     }
    ]
   },
   "pitch": 18.33,
   "yaw": -115.13,
   "distance": 50
  }
 ],
 "id": "overlay_0E6409CA_7CF3_6C26_41C9_C1D695D87C1A",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_0372B790_7CD2_A422_41B1_6037CEBC2D9A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.37,
   "yaw": 116.15,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.37,
   "image": "this.AnimatedImageResource_22864AF4_7BAD_ADE2_41D0_B731D34A2116",
   "pitch": -25.36,
   "yaw": 116.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5A01A511_7BD2_A422_41D6_B9F633AD9CA6",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1, this.camera_FF76CA89_7CD2_AC22_41B7_E12E6C4246EE); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.75,
   "yaw": 49.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.31
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.75,
   "image": "this.AnimatedImageResource_2281FAF4_7BAD_ADE2_419F_D96D3D16DA58",
   "pitch": -22.31,
   "yaw": 49.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5B4B5D70_7BD3_A4E2_41D3_57894C91AEFF",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F948C25_5368_6310_41D2_D24F026C120B, this.camera_FE973A69_7CD2_ACE2_41D8_B4047E9E8103); this.mainPlayList.set('selectedIndex', 51)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.67,
   "yaw": -56.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.67,
   "image": "this.AnimatedImageResource_16F6AD12_7C6D_A426_41D7_79570B671D09",
   "pitch": -12.99,
   "yaw": -56.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_64315B00_7BD3_6C22_41B8_A60A4F72F65A",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749, this.camera_FF46DA89_7CD2_AC22_41D3_B62129938F39); this.mainPlayList.set('selectedIndex', 52)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.01,
   "yaw": -5.08,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_1_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.76
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.01,
   "image": "this.AnimatedImageResource_22809AF4_7BAD_ADE2_41CC_B87964FCCAE4",
   "pitch": -14.76,
   "yaw": -5.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_58B66B72_7BD7_6CE6_41C9_15EBBB878DBA",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F97802B_5368_E310_41BE_FCB92C904745, this.camera_FF67DA79_7CD2_ACE2_41D1_7BD74E0FDE3C); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.12,
   "yaw": -33.17,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0_HS_4_0_0_map.gif",
      "width": 21,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 16.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0_HS_4_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": 16.41,
   "yaw": -33.17,
   "distance": 50
  }
 ],
 "id": "overlay_0CEA7CE6_7CED_A5EE_41A9_B6097CBC3896",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.81,
   "yaw": -3.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.81,
   "image": "this.AnimatedImageResource_227D1AF4_7BAD_ADE2_41D5_E81D536C2E57",
   "pitch": -6.38,
   "yaw": -3.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_5DA87836_7BD3_AC6E_41C6_3E5384D3B5CC",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F950909_5368_A511_41C6_00C9F7D72430, this.camera_0724B475_7CD2_A4E2_41D5_7F6054D906EA); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.84,
   "yaw": -136.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -50.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.84,
   "image": "this.AnimatedImageResource_227CBAF4_7BAD_ADE2_41C1_C2069A924348",
   "pitch": -50.12,
   "yaw": -136.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5C486441_7BD3_6422_41AF_6DD49BB9E7A9",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB, this.camera_07502475_7CD2_A4E2_41D6_6375EAECC30D); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.16,
   "yaw": 10.69,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.16,
   "image": "this.AnimatedImageResource_137FF8F2_7CEF_6DE6_41C0_209161ECF687",
   "pitch": -27.64,
   "yaw": 10.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_EB4FD465_FA5A_DB8D_41DE_480C293FF27A",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6, this.camera_FD796908_7CD2_AC22_4197_510D9590D5F0); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 12.17,
   "yaw": -137.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 12.17,
   "image": "this.AnimatedImageResource_137C68F2_7CEF_6DE6_41D2_0A8D1CAF5075",
   "pitch": -46,
   "yaw": -137.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_24057C3D_3E61_8548_41B6_5060F9B27C7C",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB, this.camera_FC9A48F4_7CD2_ADE2_41D5_7ABC0A638A40); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 10.78,
   "yaw": -34.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_1_HS_2_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 67.42
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.78,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_1_HS_2_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": 67.42,
   "yaw": -34.48,
   "distance": 50
  }
 ],
 "id": "overlay_10A1CC31_7CD3_A462_41D7_E4BF2BFA2BA6",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_FD692900_7CD2_AC22_41D9_8871AC2DB952); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.7,
   "yaw": 6.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.82
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.7,
   "image": "this.AnimatedImageResource_22735AF4_7BAD_ADE2_41C1_C1EF97842972",
   "pitch": -16.82,
   "yaw": 6.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4813443C_7BFE_A461_41D6_A192C582EFD2",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C, this.camera_000C1534_7CD2_A462_41CD_17B71BB9FC19); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.67,
   "yaw": -109.78,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -27.16
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.67,
   "image": "this.AnimatedImageResource_2272FAF4_7BAD_ADE2_41B6_29ED37DE1640",
   "pitch": -27.16,
   "yaw": -109.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4F7A33ED_7BF2_A3E2_41D2_801C0DE89AFF",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD, this.camera_002B8524_7CD2_A462_41D3_4F0EB28AC58E); this.mainPlayList.set('selectedIndex', 67)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.37,
   "yaw": 145.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_1_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.37,
   "image": "this.AnimatedImageResource_22720AF4_7BAD_ADE2_41DC_96E017EA2F24",
   "pitch": -25.77,
   "yaw": 145.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4E384687_7BF6_E42E_41D3_F0F912AB1792",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7, this.camera_00388534_7CD2_A462_41CE_7601BD17EBDF); this.mainPlayList.set('selectedIndex', 74)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.47,
   "yaw": 44.62,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.47,
   "image": "this.AnimatedImageResource_22A2AAE4_7BAD_ADE2_41D4_52C2BFAEE6B5",
   "pitch": 3.36,
   "yaw": 44.62,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D8F401D_5893_42EC_41C2_CD4B6D6E881E",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B, this.camera_0108D642_7CD2_A426_41C2_4BA58850DF39); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.24,
   "yaw": -69.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -16.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.24,
   "image": "this.AnimatedImageResource_2123CFA0_7C52_E462_41C7_551AE1CF6074",
   "pitch": -16.03,
   "yaw": -69.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4A96A672_5893_4F37_41D0_6F28A5BAFA06",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67614869_6CE7_66DA_41DB_2102C50014E5, this.camera_01182652_7CD2_A426_41A4_ACD18B711D51); this.mainPlayList.set('selectedIndex', 14)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 32.5,
   "yaw": 73.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 0.68
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 32.5,
   "image": "this.AnimatedImageResource_229DEAE4_7BAD_ADE2_41AB_1AD4D24FE035",
   "pitch": 0.68,
   "yaw": 73.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5FBEA984_7BD5_AC22_41D5_6E9C7333BE67",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E, this.camera_013A1633_7CD2_A467_41D9_E7573244AB3A); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.45,
   "yaw": 108.72,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -28.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.45,
   "image": "this.AnimatedImageResource_2285EAF4_7BAD_ADE2_41D0_C605F2268A7A",
   "pitch": -28.14,
   "yaw": 108.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_61E3D617_7BB3_642E_41A3_D492B7B032A8",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA, this.camera_FD3C792B_7CD2_AC66_41D7_98D7FE3D2947); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.84,
   "yaw": -156.32,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -5.06
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.84,
   "image": "this.AnimatedImageResource_22740AF4_7BAD_ADE2_41C5_DDA96B435AE3",
   "pitch": -5.06,
   "yaw": -156.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_415AA5D7_7BED_E42E_41DA_24CFE010B5AE",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412, this.camera_012AC622_7CD2_A466_41DC_13FF47122E12); this.mainPlayList.set('selectedIndex', 70)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.65,
   "yaw": -99.68,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 17
     }
    ]
   },
   "pitch": -1.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.65,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B3B4D3_FA3B_6486_41C8_5E3C69F5F2D7_0_HS_0_0.png",
      "width": 118,
      "class": "ImageResourceLevel",
      "height": 127
     }
    ]
   },
   "pitch": -1.37,
   "yaw": -99.68,
   "distance": 50
  }
 ],
 "id": "overlay_7081D720_6F23_6A4A_41DA_AF13C2D417D2",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF, this.camera_0748D466_7CD2_A4EE_41D1_7030D604C7FE); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.46,
   "yaw": 7.93,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.46,
   "image": "this.AnimatedImageResource_1F293C98_3E61_8548_41CE_925668F4E6A5",
   "pitch": -6.57,
   "yaw": 7.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_271A9B8C_3E60_8348_41C1_79C5BA755A73",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA, this.camera_0775E466_7CD2_A4EE_41C4_DCD6A131ADA7); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.99,
   "yaw": -136.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -42.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.99,
   "image": "this.AnimatedImageResource_1F299C98_3E61_8548_41A7_A77BAB6BBD2A",
   "pitch": -42.4,
   "yaw": -136.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2391D232_3E63_9D58_41A4_E5D87B70EEBF",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B, this.camera_0762445A_7CD2_A426_41D8_E3CA7A176D5B); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.69,
   "yaw": -5.97,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -31.09
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.69,
   "image": "this.AnimatedImageResource_228B6AE4_7BAD_ADE2_41DB_C555903D0765",
   "pitch": -31.09,
   "yaw": -5.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6AFFFD9F_7BB7_645E_41DB_A48DA27C28BC",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226, this.camera_FDC12970_7CD2_ACE1_41BD_8B185124371E); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.09,
   "yaw": 99.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.09,
   "image": "this.AnimatedImageResource_228AFAE4_7BAD_ADE2_41DA_73DFE97C4BA5",
   "pitch": -44.8,
   "yaw": 99.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6A9CA70A_7BB5_6426_41D0_E673ECB479A4",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9, this.camera_FDF1596B_7CD2_ACE6_41D1_BBAA20504A65); this.mainPlayList.set('selectedIndex', 43)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.31,
   "yaw": 7.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.31,
   "image": "this.AnimatedImageResource_22924AE4_7BAD_ADE2_41D6_9E3DA1A60680",
   "pitch": -19.37,
   "yaw": 7.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4F47F84E_6F26_A6D6_41BE_95235D70F3BF",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB, this.camera_030587C0_7CD2_A422_41D4_590BD5EE5A71); this.mainPlayList.set('selectedIndex', 36)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.96,
   "yaw": -147.83,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -52.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.96,
   "image": "this.AnimatedImageResource_228DDAE4_7BAD_ADE2_41D3_7465E39E5F2D",
   "pitch": -52.11,
   "yaw": -147.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4C7C92A9_6F25_6A5A_4149_8659A64FC221",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3, this.camera_033717B0_7CD2_A462_41D0_30486F29DE6B); this.mainPlayList.set('selectedIndex', 39)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.49,
   "yaw": 104.81,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -23.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.49,
   "image": "this.AnimatedImageResource_228D5AE4_7BAD_ADE2_41C7_B4680D4782C9",
   "pitch": -23.63,
   "yaw": 104.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D260E59_6F22_BAFA_41D3_0E215FB5B39E",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3, this.camera_031537D0_7CD2_A422_41D3_4DA47B8B85B7); this.mainPlayList.set('selectedIndex', 38)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.53,
   "yaw": 6.52,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.98
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.53,
   "image": "this.AnimatedImageResource_1F32CC96_3E61_8558_41C4_99D4DCC20CC2",
   "pitch": -17.98,
   "yaw": 6.52,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2AC12A8B_3E63_8D48_4172_571F351F3ECB",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A, this.camera_0342C790_7CD2_A422_41C0_13F8673D899E); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.97,
   "yaw": -145.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.8
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.97,
   "image": "this.AnimatedImageResource_2F352653_7C57_6426_41DA_E3FD60E30452",
   "pitch": -39.8,
   "yaw": -145.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_33E603AC_7C53_9C62_41C9_8FE431BA2AE3",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7, this.camera_032727B0_7CD2_A462_41B0_C4AD53C2EBB2); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.77,
   "yaw": 4.87,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.77,
   "image": "this.AnimatedImageResource_22964AE4_7BAD_ADE2_41B7_04284B5CE5FE",
   "pitch": -14.04,
   "yaw": 4.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_74CE39EE_6D66_99D6_41CA_F3ABA2829A42",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466, this.camera_03E577DF_7CD2_A3DE_41D0_4B468CA2A5AC); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.27,
   "yaw": 146.06,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -34.56
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.27,
   "image": "this.AnimatedImageResource_2291DAE4_7BAD_ADE2_4181_3E1000614118",
   "pitch": -34.56,
   "yaw": 146.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_77F6E2B0_6D65_6A4A_41AB_6066AF98DF14",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B, this.camera_03FBF7EC_7CD2_A3E2_41DD_854D534735A0); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.3,
   "yaw": 0.23,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.3,
   "image": "this.AnimatedImageResource_0E1AA07D_7CAE_9CE2_41D3_F46C31E26BF3",
   "pitch": -6.63,
   "yaw": 0.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_F5E99442_FA47_5B87_41E5_42A10FD8B488",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4, this.camera_FD5F491B_7CD2_AC26_4193_70ABEB93D050); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 17.38,
   "yaw": -34.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0_HS_2_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 15.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.38,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_0_HS_2_0.png",
      "width": 79,
      "class": "ImageResourceLevel",
      "height": 54
     }
    ]
   },
   "pitch": 15.14,
   "yaw": -34.13,
   "distance": 50
  }
 ],
 "id": "overlay_1247C401_7CF3_6422_41CB_7EF77CA109C8",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_FD4F2916_7CD2_AC2E_41D1_E5753B81C6C8); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.92,
   "yaw": -0.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.92,
   "image": "this.AnimatedImageResource_22850AF4_7BAD_ADE2_41B4_840BDD6681F5",
   "pitch": -21.48,
   "yaw": -0.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6F448E7E_7BBF_A4DE_41D9_22A0DCD1D10A",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1, this.camera_01ACC691_7CD2_A422_41B2_3E3244686712); this.mainPlayList.set('selectedIndex', 49)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.52,
   "yaw": -121.54,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.52,
   "image": "this.AnimatedImageResource_22848AF4_7BAD_ADE2_41BA_A1C30142F140",
   "pitch": -38.25,
   "yaw": -121.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6E684CF5_7BBD_E5E2_41C3_48546470FA67",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F935C84_5368_A317_41CA_28B0BB1840E3, this.camera_01CE3672_7CD2_A4E6_41C3_3E8D39A304FC); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.8,
   "yaw": -78.24,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_1_HS_2_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.8,
   "image": "this.AnimatedImageResource_22843AF4_7BAD_ADE2_4180_A8B06E4B6610",
   "pitch": -22.1,
   "yaw": -78.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_6276D2DE_7BB3_9DDE_41D1_B7ECDA00B674",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F935ED0_5368_7F30_41A7_D3852F272F68, this.camera_01DC9682_7CD2_A426_41D1_2129F547C7E3); this.mainPlayList.set('selectedIndex', 47)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 16.99,
   "yaw": -4.53,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -15.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 16.99,
   "image": "this.AnimatedImageResource_22A37AE4_7BAD_ADE2_41DA_72934F9140EA",
   "pitch": -15.7,
   "yaw": -4.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_7DB19522_6CE2_AE4E_4189_2C6E73704FA8",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB, this.camera_FE0F99FA_7CD2_AFE6_41D1_D9F3439234AF); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.84,
   "yaw": 125.71,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.84,
   "image": "this.AnimatedImageResource_22A2DAE4_7BAD_ADE2_41D6_3E82AF3981BC",
   "pitch": -43.64,
   "yaw": 125.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_78088E9C_6CE2_FA7A_41B8_CD7A1292AC41",
 "data": {
  "label": "Arrow 06b Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24, this.camera_FE1E6A0A_7CD2_AC26_41D5_C3D4B5A99B62); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.39,
   "yaw": -111.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_1_HS_0_0_0_map.gif",
      "width": 16,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 1.83
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.39,
   "image": "this.AnimatedImageResource_227A0AF4_7BAD_ADE2_41D0_2658615A592D",
   "pitch": 1.83,
   "yaw": -111.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4EC343FF_7BF5_E3DE_41C8_5F96049975CF",
 "data": {
  "label": "Circle Door 02"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130, this.camera_FED29A3A_7CD2_AC66_41DB_59773159F94C); this.mainPlayList.set('selectedIndex', 73)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.61,
   "yaw": 0.45,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.12
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.61,
   "image": "this.AnimatedImageResource_2277AAF4_7BAD_ADE2_41C5_BBB7562FE0EE",
   "pitch": -25.12,
   "yaw": 0.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_428AEDEC_7BF2_A7E2_41DC_8414E879D7E2",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9, this.camera_FF144AC9_7CD2_AC22_41D1_8523A5ADBDC4); this.mainPlayList.set('selectedIndex', 69)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.29,
   "yaw": 105.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.29,
   "image": "this.AnimatedImageResource_2276FAF4_7BAD_ADE2_41B2_E8F01E33FAFE",
   "pitch": -20.61,
   "yaw": 105.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_42BD71F0_7BF3_BFE2_41D0_7F1F171F0903",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7, this.camera_FF0BBAC9_7CD2_AC22_41DD_D549FD301EB9); this.mainPlayList.set('selectedIndex', 74)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.67,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.67,
   "image": "this.AnimatedImageResource_22951AE4_7BAD_ADE2_41DE_DB10C5257DA3",
   "pitch": -13.61,
   "yaw": 2.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_782C5959_6D27_66FA_41D4_5C9E8E121B13",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6, this.camera_FC6D8839_7CD2_AC62_41C4_CD1A2E4F4753); this.mainPlayList.set('selectedIndex', 29)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.93,
   "yaw": -95.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.93,
   "image": "this.AnimatedImageResource_22949AE4_7BAD_ADE2_41DA_47E3F11E34F2",
   "pitch": -40.92,
   "yaw": -95.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7821ABD1_6D25_79CA_41D4_5D23A673B6F1",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F92B313_5368_E531_41AC_CE9167E37F07, this.camera_03887823_7CD2_AC66_41DC_37383133FA8A); this.mainPlayList.set('selectedIndex', 27)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.22,
   "yaw": -110.12,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.22,
   "image": "this.AnimatedImageResource_22946AE4_7BAD_ADE2_41BB_E7EACEF98AC1",
   "pitch": -17.05,
   "yaw": -110.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_7713D62E_6D23_6A56_41D5_88299B32D93B",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3E95517D_30A4_A723_419B_FA42351EA20B, this.camera_FC7D9847_7CD2_AC2E_41C4_A53FDD5BA817); this.mainPlayList.set('selectedIndex', 30)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.89,
   "yaw": -67.49,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0_HS_3_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 3.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.89,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_0_HS_3_0.png",
      "width": 98,
      "class": "ImageResourceLevel",
      "height": 77
     }
    ]
   },
   "pitch": 3.4,
   "yaw": -67.49,
   "distance": 50
  }
 ],
 "id": "overlay_0CA0761F_7CF3_E45E_41DD_9D2B7DF453BE",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_039FE82B_7CD2_AC66_41BE_81DA10324260); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.2,
   "yaw": 34.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.2,
   "image": "this.AnimatedImageResource_22875AF4_7BAD_ADE2_41DC_43D083975DE4",
   "pitch": -19.97,
   "yaw": 34.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_60F90DEA_7BAD_A7E1_41D7_E502498B7324",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F965226_5368_A713_419B_42F207D83AC0, this.camera_01B376A1_7CD2_A462_41D8_33FBB89D3D4D); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.08,
   "yaw": -88.39,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.08,
   "image": "this.AnimatedImageResource_2286CAF4_7BAD_ADE2_41C6_1233AB90581A",
   "pitch": -33.58,
   "yaw": -88.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_65D6F744_7BAE_A422_4189_11D6518E0BB2",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA, this.camera_01A32691_7CD2_A422_41CD_A79911AF1475); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.55,
   "yaw": -98.41,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.55,
   "image": "this.AnimatedImageResource_22800AF4_7BAD_ADE2_41D4_4A964687FD4E",
   "pitch": -38.18,
   "yaw": -98.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_5D821D65_7BD5_A4E2_41A3_7A916D6F337B",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F965226_5368_A713_419B_42F207D83AC0, this.camera_FC4C484E_7CD2_AC3E_41C4_4263A83A30C8); this.mainPlayList.set('selectedIndex', 50)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.16,
   "yaw": 0.35,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.16,
   "image": "this.AnimatedImageResource_22851AE4_7BAD_ADE2_41D5_7D13D59AB7F8",
   "pitch": -20.18,
   "yaw": 0.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_694B9428_7BB3_A461_41D7_1518C8BB2492",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226, this.camera_022646F1_7CD2_A5E2_41C1_D80CBF86B44E); this.mainPlayList.set('selectedIndex', 45)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.11,
   "yaw": -149.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.11,
   "image": "this.AnimatedImageResource_0E768088_7CAE_9C22_41D8_BD17C6BBE37D",
   "pitch": -30.11,
   "yaw": -149.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6D31C44A_7BB2_E426_41C0_4B850720AE17",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA, this.camera_0255A6E1_7CD2_A5E2_41C9_8199319E6F63); this.mainPlayList.set('selectedIndex', 48)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.55,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.92
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.55,
   "image": "this.AnimatedImageResource_22795AF4_7BAD_ADE2_41CD_425FB846AFF5",
   "pitch": -17.92,
   "yaw": -0.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_327498F2_7BD6_EDE6_41D6_0C810F073BEC",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924, this.camera_FD0CE93B_7CD2_AC66_41B3_124D48A86AD7); this.mainPlayList.set('selectedIndex', 57)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.64,
   "yaw": -129.43,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -37.9
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.64,
   "image": "this.AnimatedImageResource_2278DAF4_7BAD_ADE2_41D6_14A5EEAB31EA",
   "pitch": -37.9,
   "yaw": -129.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3296CCAD_7BD5_A462_41D0_2DA0D32D8518",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.28,
   "yaw": 32.86,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.28,
   "image": "this.AnimatedImageResource_22887AE4_7BAD_ADE2_41B5_91E006C1FF99",
   "pitch": -44.57,
   "yaw": 32.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_74632EDA_7BB6_A426_41D3_B93EF3591995",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6, this.camera_FC5C584E_7CD2_AC3E_41DA_5EDA2E9BB902); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.67,
   "yaw": 79.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -45.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.67,
   "image": "this.AnimatedImageResource_228BCAE4_7BAD_ADE2_41DB_B76AC04B4D3B",
   "pitch": -45.19,
   "yaw": 79.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6FF16B86_7BB7_AC2E_41CA_0E8A8B6BD8BF",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95C65E_5368_AF30_41A6_78E370A011A3, this.camera_FC21A86E_7CD2_ACFE_41BA_E7F27E675292); this.mainPlayList.set('selectedIndex', 42)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.82,
   "yaw": -77.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0_HS_2_0_0_map.gif",
      "width": 19,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.82,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0_HS_2_0.png",
      "width": 88,
      "class": "ImageResourceLevel",
      "height": 71
     }
    ]
   },
   "pitch": -6.07,
   "yaw": -77.1,
   "distance": 50
  }
 ],
 "id": "overlay_12A8A28B_7CF2_9C26_41D1_3C2E611AE3C1",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_FC53E85E_7CD2_ACDE_41BF_5C43B2CC7C6A); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.1,
   "yaw": -137.98,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.1,
   "image": "this.AnimatedImageResource_2297CAE4_7BAD_ADE2_41CB_3A4DEE4E27F5",
   "pitch": -40.37,
   "yaw": -137.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_74C607D8_6D25_69FA_41CC_E8CCC654BED1",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4, this.camera_0714A495_7CD2_A422_41C7_6EA520400A3C); this.mainPlayList.set('selectedIndex', 28)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.99,
   "yaw": -36.59,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.99,
   "image": "this.AnimatedImageResource_1F2B5C98_3E61_8548_41A2_37C2E17B7674",
   "pitch": -19.23,
   "yaw": -36.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_25506A94_3E60_8D58_41C5_D572ABC705A6",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95C4D8_5368_A33F_41D3_5383A774F917, this.camera_FE49F9CB_7CD2_AC27_41D3_DF8BBAFFEB2F); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.19,
   "yaw": 54.56,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -6.54
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.19,
   "image": "this.AnimatedImageResource_1F29EC98_3E61_8548_41C3_F6900BDCFDAD",
   "pitch": -6.54,
   "yaw": 54.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_22DD554D_3E6F_87C8_41B6_FC68F80B8EEC",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788, this.camera_FE5939DA_7CD2_AC26_41DB_A3E32202CEF4); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.34,
   "yaw": 4.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.25
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.34,
   "image": "this.AnimatedImageResource_227E5AF4_7BAD_ADE2_41D0_7A1EBA97D896",
   "pitch": -21.25,
   "yaw": 4.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3385A9D9_7BD6_AC23_41D3_2E035E573429",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F97802B_5368_E310_41BE_FCB92C904745, this.camera_02C88731_7CD2_A462_41CD_DC4112F2261E); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23,
   "yaw": -122.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -35.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23,
   "image": "this.AnimatedImageResource_2279CAF4_7BAD_ADE2_41D1_F296E5E6DD0C",
   "pitch": -35.04,
   "yaw": -122.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_33CEC8DA_7BD7_6C21_41D8_0A4F5859D9D5",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F, this.camera_02FA2721_7CD2_A462_4177_273D5C1E39A1); this.mainPlayList.set('selectedIndex', 61)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.42,
   "yaw": 31.66,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -21.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.42,
   "image": "this.AnimatedImageResource_2278AAF4_7BAD_ADE2_41D4_1855809C7270",
   "pitch": -21.64,
   "yaw": 31.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_385DDA5D_7BD3_AC22_41CC_B5756D3B77B2",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9, this.camera_016655F3_7CD2_A7E6_41AC_3B003623FF03); this.mainPlayList.set('selectedIndex', 68)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.01,
   "yaw": 124.37,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.2
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.01,
   "image": "this.AnimatedImageResource_22795AF4_7BAD_ADE2_41D4_48DD48A4BE57",
   "pitch": -26.2,
   "yaw": 124.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_3D72E1A7_7BDD_7C6E_41DA_096AFA6FA08D",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F97802B_5368_E310_41BE_FCB92C904745, this.camera_0174F603_7CD2_A426_41C8_DF1C2FF608B1); this.mainPlayList.set('selectedIndex', 53)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.81,
   "yaw": -115.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_1_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -62.89
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.81,
   "image": "this.AnimatedImageResource_22907AE4_7BAD_ADE2_41D6_E9ED5C9EA73C",
   "pitch": -62.89,
   "yaw": -115.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_739F62FE_6F23_6BB6_41C7_1735237E878C",
 "data": {
  "label": "Arrow 06b Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3B2B88F5_3064_A523_41BA_8572674890DF, this.camera_03B81816_7CD2_AC21_41CB_C46B63159BFC); this.mainPlayList.set('selectedIndex', 33)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 36.96,
   "yaw": -73.79,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_1_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 36.96,
   "image": "this.AnimatedImageResource_227F3AF4_7BAD_ADE2_41C8_CB631DFC1EC3",
   "pitch": -22.5,
   "yaw": -73.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_523156D3_7BDE_A426_41D1_92D97ABACADA",
 "data": {
  "label": "Arrow 06a Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F950909_5368_A511_41C6_00C9F7D72430, this.camera_076F7456_7CD2_A42E_41C5_5CAFD2BA93AD); this.mainPlayList.set('selectedIndex', 55)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 18.03,
   "yaw": -62.34,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0_HS_1_0_0_map.gif",
      "width": 20,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 13.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 18.03,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_0_HS_1_0.png",
      "width": 74,
      "class": "ImageResourceLevel",
      "height": 59
     }
    ]
   },
   "pitch": 13.63,
   "yaw": -62.34,
   "distance": 50
  }
 ],
 "id": "overlay_11339CAB_7CED_E466_41DB_47632A767102",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279, this.camera_06962451_7CD2_A422_41D1_8CB25BDE49BE); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.08,
   "yaw": -82.7,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -33.29
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.08,
   "image": "this.AnimatedImageResource_229F4AE4_7BAD_ADE2_41D4_2132767240D4",
   "pitch": -33.29,
   "yaw": -82.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D633179_5892_C535_41B4_CBBBA89F5E5E",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA, this.camera_FCC638AD_7CD2_AC62_41D8_E79EF8FF6C99); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.28,
   "yaw": 62.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.28,
   "image": "this.AnimatedImageResource_1ADF0136_7C7E_FC6E_41CB_365E72EDFC01",
   "pitch": -13.66,
   "yaw": 62.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4C2BB39D_5893_C5ED_41CA_7185C0D8BF28",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227, this.camera_FCF6D89D_7CD2_AC22_41DD_C311F090C671); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.99,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_1_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -1.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.99,
   "image": "this.AnimatedImageResource_229EAAE4_7BAD_ADE2_41CC_246B851C396A",
   "pitch": -1.66,
   "yaw": 1.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_4D95CFB4_588E_BD3C_41A7_DC27FEF2A6B1",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248, this.camera_FCE6F89D_7CD2_AC22_41C8_49090903D615); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.82,
   "yaw": 12.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -24.01
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.82,
   "image": "this.AnimatedImageResource_22755AF4_7BAD_ADE2_41C6_E8A3C4DB1E46",
   "pitch": -24.01,
   "yaw": 12.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_440F6CAC_7BD5_A462_41D9_88E6B60D0A5D",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9, this.camera_07F164B5_7CD2_A463_41BD_1B05C3ECEA9A); this.mainPlayList.set('selectedIndex', 71)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.48,
   "yaw": -152.84,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -40.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.48,
   "image": "this.AnimatedImageResource_2274FAF4_7BAD_ADE2_41D3_4832308819D1",
   "pitch": -40.7,
   "yaw": -152.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_3AA8CFC7_7BD2_E42E_41DE_756F16E562BD",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C, this.camera_07C4E4BE_7CD2_A45E_41C9_21937CEB8D72); this.mainPlayList.set('selectedIndex', 64)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.25,
   "yaw": -0.96,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_1_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -19.65
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.25,
   "image": "this.AnimatedImageResource_2E0B5F07_3E61_8338_41C1_704D670C6AD8",
   "pitch": -19.65,
   "yaw": -0.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30BAAED0_3E60_82D8_41CA_5AB90DFDFBAF",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03, this.camera_00014544_7CD2_A422_41C5_AE56E1AD9E0F); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 26.12,
   "yaw": -157.94,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_1_HS_1_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -18.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 26.12,
   "image": "this.AnimatedImageResource_2E0BBF07_3E61_8338_41B3_DFC75FD300A1",
   "pitch": -18.26,
   "yaw": -157.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_31A215A3_3E63_8778_41A6_A320652123FF",
 "data": {
  "label": "Arrow 01b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8, this.camera_0014E554_7CD2_A422_41D3_09BE094BA456); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.25,
   "yaw": -103.61,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0_HS_3_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -17.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.25,
   "image": "this.AnimatedImageResource_2F35C653_7C57_6426_41CC_8CF4E311A181",
   "pitch": -17.93,
   "yaw": -103.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2E5B06D8_7C52_A422_41D3_1C8F00D0DF32",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0, this.camera_FF880B22_7CD2_AC61_41D4_80067FADE30A); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 22.66,
   "yaw": 103.13,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -13.85
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 22.66,
   "image": "this.AnimatedImageResource_2F358653_7C57_6426_41D5_F03D5B316095",
   "pitch": -13.85,
   "yaw": 103.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2CD5A613_7C52_E426_41BD_51DA36A04B6D",
 "data": {
  "label": "Arrow 06c"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47, this.camera_FFA81B09_7CD2_AC22_41C0_62113F8ED9E0); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.59,
   "yaw": -148.2,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0_HS_5_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.59,
   "image": "this.AnimatedImageResource_2F3A3653_7C57_6426_41D8_D17E14E0C832",
   "pitch": -29.26,
   "yaw": -148.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2EE2B0BA_7C52_9C66_41B9_2622E9FDBB92",
 "data": {
  "label": "Arrow 09a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9, this.camera_FFB86B09_7CD2_AC22_41DB_29BFB417D003); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 38.67,
   "yaw": -113.27,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0_HS_2_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -12.7
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 38.67,
   "image": "this.AnimatedImageResource_1F308C96_3E61_8558_4196_1CD3297B1407",
   "pitch": -12.7,
   "yaw": -113.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2C36114C_3E63_9FC8_41AF_F576BF784FF8",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A, this.camera_FD85899D_7CD2_AC22_41CC_DB816EE431E8); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 34.5,
   "yaw": -35.38,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0_HS_3_0_0_map.gif",
      "width": 44,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 34.5,
   "image": "this.AnimatedImageResource_1F334C96_3E61_8558_41C1_7ACCB77A4D7F",
   "pitch": -9.66,
   "yaw": -35.38,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2FEFB42F_3E60_8548_41CD_DE6430FE34B0",
 "data": {
  "label": "Arrow 05c Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4, this.camera_FE6429BB_7CD2_AC66_41D4_4669B21FEFFB); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 20.44,
   "yaw": -3.4,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -7.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.44,
   "image": "this.AnimatedImageResource_1F371C97_3E61_8558_41CD_35897DE000CF",
   "pitch": -7.05,
   "yaw": -3.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2B84CF8B_3E60_8348_41A1_D45A72BCAAA9",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E, this.camera_0701D495_7CD2_A422_41DA_3FDC30EE0D4A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 19.37,
   "yaw": -144.1,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0_HS_2_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -43.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.37,
   "image": "this.AnimatedImageResource_2F399653_7C57_6426_41DA_2A2B2401E47C",
   "pitch": -43.64,
   "yaw": -144.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_2F4C312D_7C56_9C62_41DB_F398F1EBC665",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F, this.camera_070CB492_7CD2_A426_41D0_A3A174255AE2); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 24.92,
   "yaw": -119.51,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_1_HS_0_0_0_map.gif",
      "width": 41,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -55.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 24.92,
   "image": "this.AnimatedImageResource_22981AE4_7BAD_ADE2_41D1_0F7D09674DC3",
   "pitch": -55.03,
   "yaw": -119.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_41250936_5891_453F_41B7_4079346327D0",
 "data": {
  "label": "Arrow 06c Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7, this.camera_02147717_7CD2_A42E_41D2_AEDD73E2F3A9); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.1,
   "yaw": -2.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -14.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.1,
   "image": "this.AnimatedImageResource_229B9AE4_7BAD_ADE2_41A8_13BB2D6BD027",
   "pitch": -14.14,
   "yaw": -2.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_435AE5D5_5897_4D7D_41BE_AC4E72E553F8",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93, this.camera_02EAD717_7CD2_A42E_41DA_AA2718B635C0); this.mainPlayList.set('selectedIndex', 26)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.17,
   "yaw": 4.74,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -20.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.17,
   "image": "this.AnimatedImageResource_227C0AF4_7BAD_ADE2_41C0_AE48F9ABF41E",
   "pitch": -20.11,
   "yaw": 4.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_53211655_7BDD_A422_41D6_1CAEC413C5E6",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5, this.camera_FFD93B00_7CD2_AC22_4192_4DD68AA3DC60); this.mainPlayList.set('selectedIndex', 56)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 31.19,
   "yaw": -47.16,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_1_HS_1_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -38.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 31.19,
   "image": "this.AnimatedImageResource_227F8AF4_7BAD_ADE2_41D9_D5BE9F694301",
   "pitch": -38.77,
   "yaw": -47.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_50350E53_7BDD_A427_41D6_29120E22B457",
 "data": {
  "label": "Arrow 06b Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E, this.camera_FFC9CAE9_7CD2_ADE2_41CA_25676AE25F04); this.mainPlayList.set('selectedIndex', 54)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 21.46,
   "yaw": 5.22,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 21.46,
   "image": "this.AnimatedImageResource_228A6AE4_7BAD_ADE2_41CF_7925885580BF",
   "pitch": -44.34,
   "yaw": 5.22,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_69BDEF6F_7BB2_E4FE_41CB_EBD7F5DD1502",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F935C84_5368_A317_41CA_28B0BB1840E3, this.camera_024726D1_7CD2_A422_41C0_11FC2EBBC2DA); this.mainPlayList.set('selectedIndex', 46)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.22,
   "yaw": 85.33,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_1_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -44.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.22,
   "image": "this.AnimatedImageResource_2285FAE4_7BAD_ADE2_41DB_56C0B5D7A260",
   "pitch": -44.41,
   "yaw": 85.33,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_6F209EE7_7BB3_65EE_41CC_F029A57562AA",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6, this.camera_027726D1_7CD2_A422_41D0_1E3A91A51771); this.mainPlayList.set('selectedIndex', 44)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 15.26,
   "yaw": 3.85,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 15.26,
   "image": "this.AnimatedImageResource_1F37BC97_3E61_8558_41B5_1D7CE21855D0",
   "pitch": -30.18,
   "yaw": 3.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_26778676_3E60_85D8_41CE_A5EFEDDE5BB9",
 "data": {
  "label": "Arrow 06a"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4, this.camera_028E8760_7CD2_A4E2_41CE_3E6B0228F2D0); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.06,
   "yaw": -45.05,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0_HS_0_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -29.04
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.06,
   "image": "this.AnimatedImageResource_22935AE4_7BAD_ADE2_41B9_4419CEED503B",
   "pitch": -29.04,
   "yaw": -45.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4D87FC62_6F26_FECE_41C4_C21BBDB11146",
 "data": {
  "label": "Arrow 06a Left-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466, this.camera_004E8514_7CD2_A422_41BB_6959B446D58F); this.mainPlayList.set('selectedIndex', 32)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 25.52,
   "yaw": 43.28,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0_HS_1_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -39.84
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 25.52,
   "image": "this.AnimatedImageResource_22932AE4_7BAD_ADE2_41CF_08CD3B5563C8",
   "pitch": -39.84,
   "yaw": 43.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4C7AD083_6F27_A64E_41D1_835CA27780FD",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6, this.camera_0043C514_7CD2_A422_41DA_A189854EE6A7); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 29.57,
   "yaw": 4.64,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_0_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -9.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 29.57,
   "image": "this.AnimatedImageResource_1343B8F2_7CEF_6DE6_41D6_3DAFF6430BF7",
   "pitch": -9.62,
   "yaw": 4.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_30AF83EB_7BB5_63E6_41D2_3695950B8E87",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24, this.camera_FD12F94F_7CD2_AC3E_41C8_1F174A2598A8); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 27.45,
   "yaw": -86.77,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -11.53
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 27.45,
   "image": "this.AnimatedImageResource_1340E8F2_7CEF_6DE6_41D7_AA92876368E1",
   "pitch": -11.53,
   "yaw": -86.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_37B04B09_7BB5_EC22_41D3_84A444C9D9BF",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756, this.camera_FDE2895B_7CD2_AC26_41BF_A8F1EE2B6480); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 41.02,
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_2_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -25.1
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 41.02,
   "image": "this.AnimatedImageResource_1340A8F2_7CEF_6DE6_41B2_FDE4E12BF9B2",
   "pitch": -25.1,
   "yaw": 138.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_1FD83647_7C55_A42E_41D3_4CFE2714C3AA",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F, this.camera_FD1CC94B_7CD2_AC26_41C1_769148A1ECB1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 14.12,
   "yaw": -39.18,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_3_0_0_map.gif",
      "width": 23,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": 39.44
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 14.12,
   "class": "HotspotPanoramaOverlayImage",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_3_0.png",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 35
     }
    ]
   },
   "pitch": 39.44,
   "yaw": -39.18,
   "distance": 50
  }
 ],
 "id": "overlay_10BC342C_7CAD_A462_41CE_B9A06A765659",
 "data": {
  "label": "Image"
 },
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 35.93,
   "yaw": -103.31,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_1_HS_0_0_0_map.gif",
      "width": 51,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -26.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 35.93,
   "image": "this.AnimatedImageResource_228D2AE4_7BAD_ADE2_41DA_3DA749360B92",
   "pitch": -26.07,
   "yaw": -103.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_4AAC2D5D_6F1F_9EFA_41D3_F349EEE307DE",
 "data": {
  "label": "Arrow 06a Left"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5F95D220_5368_E710_41C8_2D1140988ED6, this.camera_FC8B88E7_7CD2_ADEE_41DB_A411B5332C23); this.mainPlayList.set('selectedIndex', 37)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 28.31,
   "yaw": 114.9,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_1_HS_0_0_0_map.gif",
      "width": 34,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -30.97
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.31,
   "image": "this.AnimatedImageResource_227B1AF4_7BAD_ADE2_41BE_E5EF3F33C974",
   "pitch": -30.97,
   "yaw": 114.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "id": "overlay_57934854_7BD5_EC22_4151_4CBB12A5CC1E",
 "data": {
  "label": "Arrow 06b Right-Up"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24, this.camera_0791A4F5_7CD2_A5E3_419D_4B92A5F4FDC0); this.mainPlayList.set('selectedIndex', 75)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "enabledInCardboard": true,
 "maps": [
  {
   "hfov": 23.82,
   "yaw": -25.46,
   "class": "HotspotPanoramaOverlayMap",
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_1_HS_1_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   },
   "pitch": -22.63
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 23.82,
   "image": "this.AnimatedImageResource_227AFAF4_7BAD_ADE2_41D1_E7962AB19F1D",
   "pitch": -22.63,
   "yaw": -25.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_55336A38_7BD5_6C62_41D2_7D0A9F15590B",
 "data": {
  "label": "Arrow 06b"
 },
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C, this.camera_079E04E4_7CD2_A5E2_41D0_37CC11F4518F); this.mainPlayList.set('selectedIndex', 65)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F287C98_3E61_8548_41B0_A7BF9C614865",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_0E0F9088_7CAE_9C22_41D4_B1C63BE17462",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DEA6DEE_3064_7F21_41B3_BF0F4D22ADBA_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229B4AE4_7BAD_ADE2_41DE_62A25D2D0C2C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229ADAE4_7BAD_ADE2_419D_E18A9E3C5105",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3EF73962_30AB_E721_41C4_2292AC1DAA93_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F3A8653_7C57_6426_41D8_230756140D1B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D9FC77D_307C_EB23_41C7_E377598F6B47_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_226DAAF4_7BAD_ADE2_41D8_8D36CC691DAD",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_226CCB04_7BAD_AC22_41DE_EC5D3CFAC868",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_226C1B04_7BAD_AC22_41D2_E8BA0EA00FB9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_6794B6AB_6CE7_6A5F_4160_D23C9FFC8AD7_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22760AF4_7BAD_ADE2_41D1_053493B3B67E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22715AF4_7BAD_ADE2_41A8_84577DD0AEC4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2270CAF4_7BAD_ADE2_41B3_83F6C5A3A4F9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B7095A_6CE6_A6FE_41D1_7C2338612CB9_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F3AE653_7C57_6426_41DB_D6D9F7E1EF06",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DDD20CF_307C_A57F_41BF_B48ECCA193E0_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2282DAF4_7BAD_ADE2_41DB_B14C9DB1F5F5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22824AF4_7BAD_ADE2_41C1_93C1451A8B7C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227DEAF4_7BAD_ADE2_41D3_0322118B6248",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F97802B_5368_E310_41BE_FCB92C904745_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22703AF4_7BAD_ADE2_41D2_570DB8BB6DF4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_679C5DB5_6CE6_9E4A_41CD_2C421CCF0F34_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22915AE4_7BAD_ADE2_41CC_2FE160BB56DA",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2290DAE4_7BAD_ADE2_41D6_DFF9DA1C8E8C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2290BAE4_7BAD_ADE2_41CC_1810CFEE9802",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D07E2FC_30BC_6521_41B7_36FE15AA9466_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2278CAF4_7BAD_ADE2_41BC_47ECD9C984AB",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22787AF4_7BAD_ADE2_41C8_570D0A120944",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227BCAF4_7BAD_ADE2_41CB_6DB67309A00D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6F06E_6CE7_A6D6_4183_411FFEC7643C_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2289AAE4_7BAD_ADE2_41D1_083B64221301",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2288CAE4_7BAD_ADE2_41C5_E9D977178A30",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_0E7B2088_7CAE_9C22_41D4_8D81FA4CFCBB",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95C65E_5368_AF30_41A6_78E370A011A3_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228FBAE4_7BAD_ADE2_41D3_49C9363A8C17",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228F2AE4_7BAD_ADE2_41D3_062B2D39C7C1",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3E417DAE_30AD_BF21_41C8_1D528EA9848F_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229E0AE4_7BAD_ADE2_41D4_93EB64F6FBA9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22999AE4_7BAD_ADE2_41C1_FF3B6EB49D62",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F96BCFB_5368_BCF0_41C0_84AA7AB59248_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1ADEB136_7C7E_FC6E_41D5_F3E451E81F31",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1ADEC136_7C7E_FC6E_41A8_C31022F5AFB4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1ADD6136_7C7E_FC6E_41CF_5387C6FDD36E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F94536A_5368_A513_41CA_EE52E5A4F805_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_18D5FA3F_7C76_AC5E_41D8_767085046F23",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_18D46A3F_7C76_AC5E_4191_8783BAE888A3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_18D42A3F_7C76_AC5E_41D8_E7E9411719A8",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_2750A1DE_7C6F_FFDE_41D1_8213DFBC3D24_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229AAAE4_7BAD_ADE2_41B6_BE6C12F140D9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229A2AE4_7BAD_ADE2_41BC_580AE24AA798",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22958AE4_7BAD_ADE2_41D0_7FDEAF5ACB0E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F92B313_5368_E531_41AC_CE9167E37F07_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_0E1E107D_7CAE_9CE2_41D8_8892C72A4D3A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_1_HS_0_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_0E1F307D_7CAE_9CE2_41C4_33300417CB16",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_1_HS_1_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_063ED3D8_7CD2_9C22_41DF_19088F15C5E5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_2_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_063F43D8_7CD2_9C22_41C3_4EC5462C87DF",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_3_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_063F33D8_7CD2_9C22_41A7_D9C3EEAA43C8",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_4_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_063F93D8_7CD2_9C22_41D2_2D12C14DA57F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_5_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_063803D8_7CD2_9C22_41D0_318F3532AC25",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_6_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_063893D8_7CD2_9C22_41D9_C2496736B178",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_16B6422D_7CB6_9C62_41B0_9EF2A5D99279_0_HS_7_0.png",
   "width": 1040,
   "class": "ImageResourceLevel",
   "height": 690
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22A13ADA_7BAD_AC26_41C0_47927308B07A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F0B25451_FA3B_7B85_41AD_2FE5E9DAE756_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228EBAE4_7BAD_ADE2_41BD_589BEE1787ED",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228E2AE4_7BAD_ADE2_41C3_0C5AB92AE273",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3E884783_30AD_ABE7_41C7_680F1B860301_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2283AAF4_7BAD_ADE2_41D6_E46F770318BD",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F96D4DC_5368_A330_41C1_D14FD64D0749_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22974AE4_7BAD_ADE2_41C0_238C793D46F7",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2296CAE4_7BAD_ADE2_41D9_0DC4130BF857",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3E95517D_30A4_A723_419B_FA42351EA20B_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2299CAE4_7BAD_ADE2_41DC_F10898E959D2",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2299AAE4_7BAD_ADE2_41C8_3E4A202E7021",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DCFD945_309D_A763_41B0_3A9FEAF1C788_0_HS_1_0.png",
   "width": 400,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22992AE4_7BAD_ADE2_41D5_4E1B765DDC45",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22989AE4_7BAD_ADE2_41CB_D5661D182FB1",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F9432D2_5368_A733_41C1_53EA6AC071B7_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F333C96_3E61_8558_41C2_6DB6548C478E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F325C96_3E61_8558_41C1_923928DF986F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F34A653_7C57_6426_41DE_32208BEC77A5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C9C8E37_306C_7D2F_41C5_4D48450D4D9A_0_HS_3_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228C5AE4_7BAD_ADE2_41C5_FC47D3CBCC57",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228C2AE4_7BAD_ADE2_41D5_3AB8829ECB22",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D58FFFB_30A4_BB20_41C0_CF98CE8000F3_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F34CC97_3E61_8558_41C2_74B74C8343E3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F397653_7C57_6426_41CF_3F108DF3A315",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22A6CADA_7BAD_AC26_41D3_7F5AE2159728",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D6085E7_307D_AF20_41B3_126BE8DCC42F_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22918AE4_7BAD_ADE2_41D5_D5936E2A21B2",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22910AE4_7BAD_ADE2_41DB_07313C770B25",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2290EAE4_7BAD_ADE2_41DC_27BB71071E4B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3B2B88F5_3064_A523_41BA_8572674890DF_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22864AF4_7BAD_ADE2_41D0_B731D34A2116",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2281FAF4_7BAD_ADE2_419F_D96D3D16DA58",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_16F6AD12_7C6D_A426_41D7_79570B671D09",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22809AF4_7BAD_ADE2_41CC_B87964FCCAE4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F965226_5368_A713_419B_42F207D83AC0_1_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227D1AF4_7BAD_ADE2_41D5_E81D536C2E57",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227CBAF4_7BAD_ADE2_41C1_C2069A924348",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95B796_5368_AD30_41D1_58009FEBBF4E_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_137FF8F2_7CEF_6DE6_41C0_209161ECF687",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_137C68F2_7CEF_6DE6_41D2_0A8D1CAF5075",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F0B181B9_FA3B_7C85_41E1_22E0A69DFD4B_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22735AF4_7BAD_ADE2_41C1_C1EF97842972",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2272FAF4_7BAD_ADE2_41B6_29ED37DE1640",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22720AF4_7BAD_ADE2_41DC_96E017EA2F24",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6DF65_6CE7_7ACA_41B3_B10BCA194130_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22A2AAE4_7BAD_ADE2_41D4_52C2BFAEE6B5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2123CFA0_7C52_E462_41C7_551AE1CF6074",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229DEAE4_7BAD_ADE2_41AB_1AD4D24FE035",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F93E0A6_5368_A310_41D3_25CA283E2AAB_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2285EAF4_7BAD_ADE2_41D0_C605F2268A7A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F935ED0_5368_7F30_41A7_D3852F272F68_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22740AF4_7BAD_ADE2_41C5_DDA96B435AE3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_679A2591_6CE6_AE4A_41CC_8FF784EE6DE9_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F293C98_3E61_8548_41CE_925668F4E6A5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F299C98_3E61_8548_41A7_A77BAB6BBD2A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3DFE96E5_3065_ED23_41B7_7F67A63F61C6_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228B6AE4_7BAD_ADE2_41DB_C555903D0765",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228AFAE4_7BAD_ADE2_41DA_73DFE97C4BA5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F962A40_5368_A710_41CF_CD4A62CBCAE6_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22924AE4_7BAD_ADE2_41D6_9E3DA1A60680",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228DDAE4_7BAD_ADE2_41D3_7465E39E5F2D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228D5AE4_7BAD_ADE2_41C7_B4680D4782C9",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95D220_5368_E710_41C8_2D1140988ED6_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F32CC96_3E61_8558_41C4_99D4DCC20CC2",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F352653_7C57_6426_41DA_E3FD60E30452",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D8C7BB2_3065_BB21_41AF_F59A27E84CA9_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22964AE4_7BAD_ADE2_41B7_04284B5CE5FE",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2291DAE4_7BAD_ADE2_4181_3E1000614118",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D92C65A_30BC_AD60_41A5_ECAB98F3C24C_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_0E1AA07D_7CAE_9CE2_41D3_F46C31E26BF3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F0B2B6F8_FA3B_6483_41D0_ED004DD695C8_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22850AF4_7BAD_ADE2_41B4_840BDD6681F5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22848AF4_7BAD_ADE2_41BA_A1C30142F140",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22843AF4_7BAD_ADE2_4180_A8B06E4B6610",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F98AF2F_5368_5D10_41CA_78E26E922ECA_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22A37AE4_7BAD_ADE2_41DA_72934F9140EA",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22A2DAE4_7BAD_ADE2_41D6_3E82AF3981BC",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67614869_6CE7_66DA_41DB_2102C50014E5_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227A0AF4_7BAD_ADE2_41D0_2658615A592D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_4ED7156A_7BF6_A4E6_41DA_B5E8642DF0DD_1_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 1200
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2277AAF4_7BAD_ADE2_41C5_BBB7562FE0EE",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2276FAF4_7BAD_ADE2_41B2_E8F01E33FAFE",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B77EE1_6CE6_9BCA_41D8_666BDA2C5412_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22951AE4_7BAD_ADE2_41DE_DB10C5257DA3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22949AE4_7BAD_ADE2_41DA_47E3F11E34F2",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22946AE4_7BAD_ADE2_41BB_E7EACEF98AC1",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_7E8AD9EF_6DE6_99D6_41C0_21BF8EDC19A4_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22875AF4_7BAD_ADE2_41DC_43D083975DE4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2286CAF4_7BAD_ADE2_41C6_1233AB90581A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F96D1E5_5368_A510_4197_D0D3941BADA1_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22800AF4_7BAD_ADE2_41D4_4A964687FD4E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F948C25_5368_6310_41D2_D24F026C120B_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22851AE4_7BAD_ADE2_41D5_7D13D59AB7F8",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_0E768088_7CAE_9C22_41D8_BD17C6BBE37D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F935C84_5368_A317_41CA_28B0BB1840E3_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22795AF4_7BAD_ADE2_41CD_425FB846AFF5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2278DAF4_7BAD_ADE2_41D6_14A5EEAB31EA",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F947DD6_5368_BD30_41BE_CB62EE50980F_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22887AE4_7BAD_ADE2_41B5_91E006C1FF99",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228BCAE4_7BAD_ADE2_41DB_B76AC04B4D3B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_F0BC0F41_FA3B_A585_41DB_7C48DF2C33B9_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2297CAE4_7BAD_ADE2_41CB_3A4DEE4E27F5",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C3BEAA3_30AD_A527_41C7_E42ED7D9FCF6_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F2B5C98_3E61_8548_41A2_37C2E17B7674",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F29EC98_3E61_8548_41C3_F6900BDCFDAD",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C8D9D3F_3064_DF1F_41C0_F59DAB38A227_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227E5AF4_7BAD_ADE2_41D0_7A1EBA97D896",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2279CAF4_7BAD_ADE2_41D1_F296E5E6DD0C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F9407FE_5368_ECF0_4194_4E7EE2697924_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2278AAF4_7BAD_ADE2_41D4_1855809C7270",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22795AF4_7BAD_ADE2_41D4_48DD48A4BE57",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_6715182E_6CE6_A656_41D7_A11C4170FD3C_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22907AE4_7BAD_ADE2_41D6_E9ED5C9EA73C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F949C5E_5368_E330_41B3_3FF7DE9468A9_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227F3AF4_7BAD_ADE2_41C8_CB631DFC1EC3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95AC3F_5368_A370_41C2_D36D0DE611C5_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229F4AE4_7BAD_ADE2_41D4_2132767240D4",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1ADF0136_7C7E_FC6E_41CB_365E72EDFC01",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229EAAE4_7BAD_ADE2_41CC_246B851C396A",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95C4D8_5368_A33F_41D3_5383A774F917_1_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22755AF4_7BAD_ADE2_41C6_E8A3C4DB1E46",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2274FAF4_7BAD_ADE2_41D3_4832308819D1",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B103C1_6CE6_E9CA_41DA_4445883576D9_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2E0B5F07_3E61_8338_41C1_704D670C6AD8",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 3,
 "rowCount": 3,
 "class": "AnimatedImageResource",
 "frameDuration": 62,
 "id": "AnimatedImageResource_2E0BBF07_3E61_8338_41B3_DFC75FD300A1",
 "frameCount": 9,
 "levels": [
  {
   "url": "media/panorama_30FA3E87_3E60_8538_41CB_7E6CAB161BC4_1_HS_1_0.png",
   "width": 330,
   "class": "ImageResourceLevel",
   "height": 180
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F35C653_7C57_6426_41CC_8CF4E311A181",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0_HS_3_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F358653_7C57_6426_41D5_F03D5B316095",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F3A3653_7C57_6426_41D8_D17E14E0C832",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D325915_3064_64E3_41B6_BC0A064CB5E7_0_HS_5_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F308C96_3E61_8558_4196_1CD3297B1407",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F334C96_3E61_8558_41C1_7ACCB77A4D7F",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D4EBF06_306F_BCE1_41B7_B8DB12B61B03_0_HS_3_0.png",
   "width": 560,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F371C97_3E61_8558_41CD_35897DE000CF",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2F399653_7C57_6426_41DA_2A2B2401E47C",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D0DF593_307C_6FE7_41AF_A00B2BA295D4_0_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22981AE4_7BAD_ADE2_41D1_0F7D09674DC3",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_229B9AE4_7BAD_ADE2_41A8_13BB2D6BD027",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F93CF5D_5368_5D31_41BF_DB3C4BD5D264_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227C0AF4_7BAD_ADE2_41C0_AE48F9ABF41E",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227F8AF4_7BAD_ADE2_41D9_D5BE9F694301",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F950909_5368_A511_41C6_00C9F7D72430_1_HS_1_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228A6AE4_7BAD_ADE2_41CF_7925885580BF",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_2285FAE4_7BAD_ADE2_41DB_56C0B5D7A260",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95BB1D_5368_A531_41BE_A9BE6EE51226_1_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1F37BC97_3E61_8558_41B5_1D7CE21855D0",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3D55949B_307B_EDE7_41BC_C5D9E167212E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22935AE4_7BAD_ADE2_41B9_4419CEED503B",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_22932AE4_7BAD_ADE2_41CF_08CD3B5563C8",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_3C4B65CA_30BC_AF60_41BE_AA930150F4EB_0_HS_1_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1343B8F2_7CEF_6DE6_41D6_3DAFF6430BF7",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1340E8F2_7CEF_6DE6_41D7_AA92876368E1",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_1340A8F2_7CEF_6DE6_41B2_FDE4E12BF9B2",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_36EDCAD2_7BB3_AC21_41D5_1FB58749688D_1_HS_2_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_228D2AE4_7BAD_ADE2_41DA_3DA749360B92",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_5F95CF67_5368_DD10_4183_8B9401A9FBF3_1_HS_0_0.png",
   "width": 640,
   "class": "ImageResourceLevel",
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227B1AF4_7BAD_ADE2_41BE_E5EF3F33C974",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_1_HS_0_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "id": "AnimatedImageResource_227AFAF4_7BAD_ADE2_41D1_E7962AB19F1D",
 "frameCount": 24,
 "levels": [
  {
   "url": "media/panorama_67B6E12F_6CE7_A656_41D9_13B49379DC4C_1_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
}],
 "start": "this.init()",
 "children": [
  "this.MainViewer"
 ],
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "scrollBarVisible": "rollOver",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "backgroundPreloadEnabled": true,
 "borderRadius": 0,
 "paddingRight": 0,
 "vrPolyfillScale": 0.5,
 "width": "100%",
 "horizontalAlign": "left",
 "verticalAlign": "top",
 "propagateClick": false,
 "borderSize": 0,
 "scripts": {
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "unregisterKey": function(key){  delete window[key]; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "registerKey": function(key, value){  window[key] = value; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "existsKey": function(key){  return key in window; },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "class": "Player",
 "paddingLeft": 0,
 "contentOpaque": false,
 "defaultVRPointer": "laser",
 "downloadEnabled": false,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "paddingBottom": 0,
 "gap": 10,
 "height": "100%",
 "mouseWheelEnabled": true,
 "overflow": "visible",
 "paddingTop": 0,
 "desktopMipmappingEnabled": false,
 "shadow": false,
 "scrollBarWidth": 10,
 "minHeight": 20,
 "data": {
  "name": "Player465"
 }
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
