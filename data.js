var APP_DATA = {
  "scenes": [
    {
      "id": "0-full-house",
      "name": "full house",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": -0.0033162318803441337,
        "pitch": 0.34691310234290995,
        "fov": 1.071793291933526
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "1-salon-vu-cuisine",
      "name": "salon vu cuisine",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "2-chambre-enfant-",
      "name": "chambre enfant ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "3-entree-maison",
      "name": "entree maison",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.22682949163576
      },
      "linkHotspots": [
        {
          "yaw": 0.34698302701820616,
          "pitch": 0.3013554661437716,
          "rotation": 0.7853981633974483,
          "target": "1-salon-vu-cuisine"
        },
        {
          "yaw": -0.5454103994006996,
          "pitch": 0.43598360605221664,
          "rotation": 11.780972450961727,
          "target": "2-chambre-enfant-"
        },
        {
          "yaw": 0.09981998698298966,
          "pitch": 0.15697172192312792,
          "rotation": 5.497787143782138,
          "target": "1-salon-vu-cuisine"
        },
        {
          "yaw": -0.9025582540622636,
          "pitch": 0.40320647728456294,
          "rotation": 4.71238898038469,
          "target": "4-cuisine-"
        },
        {
          "yaw": -0.5320974824828273,
          "pitch": 0.5828910481832263,
          "rotation": 10.995574287564278,
          "target": "6-chambre--parental"
        },
        {
          "yaw": -0.9386645521495147,
          "pitch": 0.2764966166321692,
          "rotation": 5.497787143782138,
          "target": "7-sb-visiteur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-cuisine-",
      "name": "cuisine ",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.20792987850532363,
          "pitch": 1.283682497805703,
          "rotation": 4.71238898038469,
          "target": "7-sb-visiteur"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-sb-chambre-par",
      "name": "S.B chambre par",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    },
    {
      "id": "6-chambre--parental",
      "name": "Chambre  Parental",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.6844571238324804,
          "pitch": 0.6269357335999075,
          "rotation": 4.71238898038469,
          "target": "5-sb-chambre-par"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-sb-visiteur",
      "name": "S.B visiteur",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Jamal app 360",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
