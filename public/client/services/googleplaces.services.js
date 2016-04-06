(function() {
    angular
        .module("ExploreWithMeApp")
        .factory("GooglePlaces", GooglePlaces);

    function GooglePlaces( $http) {

        var searchMyPlaces=[];



        searchMyPlaces =
            {
            "html_attributions" : [],
            "next_page_token" : "CuQB3AAAACX_8QMdsXYxhkWv2c3u2ehO8LE86ks2Cr_JpLFmUpKOtulDWTr2M4MdSpnCv2bqJp7qxNmBG3aZFkZxcLQRhsBt54zLHcnHvSRyUI8GqiRSozp-meXVtfojgmtuc28GnbKQ-vmVpENRvGB64GXGbobft5YrBbQl-J_7U6htNcu0KBtz5kVgG9FS95hOuMkeC7jK_WjNgUKcti8Gk7ovxkonFldJCkMlCpSmSVDCa_1VFVU-UW2d9lz7RxEZ8kH1H3tdPpDzSsB1iNUlXPms2EFjK7_OQ7XL05x_5nMTGPM1EhAStyk69lAS__U9CMpYwLCYGhSqvBqCChrVbSIsaEWGJnp0KUpG3Q",
            "results" : [
                {
                    "formatted_address" : "11 1/2 Thacher St, Boston, MA 02113, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3654261,
                            "lng" : -71.0568787
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "54c5364b8800062938e850c36970795df05d2420",
                    "name" : "Regina Pizzeria",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1356,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/109325579760895334595/photos\"\u003ePhillip Fuller\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAzJRSGjKQ7Els7_WBUgazOG2azhmcat6ECiIXTvRs0jRj7WtUeOPDdnarWkmeVbhiiP1G_yq7x2n9exgrCQnCbdow1Av5x3hPL1Gj5bb2TCqXjSGLKhoAKPvZzXwo3G_DEhAu1B70Sh46wjJu52TvAwEkGhQ331B2jxQ1N6oHmMtRc0woWrp88w",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJb4wUsI5w44kRnERe7ywQaJA",
                    "price_level" : 2,
                    "rating" : 4.3,
                    "reference" : "CnRjAAAA9v1IOuoHkzYkKAGyJSMyehFQjaELLpv1lqsTQl66-xS9bk74blBo-amTnQCYX5f_wbX30qZkrXZksXfbVDQgOMWW3H8doc-YcmwV7F2Py9_xY-4rF4S3mAY6YRjfXZ0_GzVDMZwYcdG4gxmcbGWjsRIQP3wNKmNa6eCAWo4vlMekixoUJ7KjsZda7zX-7M0ynpY6HkMYRWA",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "336 Sumner St, East Boston, MA 02128, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3672981,
                            "lng" : -71.03571079999999
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "7d4b6a363f03e2c65def7ae1c4bd84c7f981054f",
                    "name" : "Italian Express Pizzeria",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 540,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/106945212341235645509/photos\"\u003eItalian Express Pizzeria\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAYnsiX4wzRS7UWAza2Umu1kdPll6cVKB9Y8aSLh4YCFbeMMwI9NTOc0V6H88N50Gjo-hVJnnTQLMgRr7YpJoHWlUD8XPttt_tI-N4nF_GBFA45tpOsq1ghVGhCPE9rfZGEhAdFSP8nkV_D0eghN-mle09GhTHQm5L6mKM_rZb89-OfoN9Z9V4Ow",
                            "width" : 584
                        }
                    ],
                    "place_id" : "ChIJQT3kJWhw44kRc00JDQ-ahgg",
                    "price_level" : 1,
                    "rating" : 4.7,
                    "reference" : "CnRrAAAAMuLLVQ2UGkJwOXWdn2YO0I_19UJDq30XuxoLy5cD2XDybInHvB2iyXI03RYhdI6wj4erKnFSucLu1hHv0Rtw1DaIGJ-02i5QgOckTk2RrU6wIMhXOLwfMdyAgZs2gnPE9WVrw66DfKpRUkRdSrhy4BIQ_vbc-TfW2pF1IkfZui_-URoU-5yd36D56LieoIurQSFEvNhngE4",
                    "types" : [
                        "meal_delivery",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address" : "772 Tremont St, Boston, MA 02118, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.33941089999999,
                            "lng" : -71.0797578
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "de92faef52afa8c6dbc5d3a79ec8b77c11142ce3",
                    "name" : "South End Pizza and Grill",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 976,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/114726130301649319692/photos\"\u003ecolin smith\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAA19auF3Jj8Tz6cCYL4OUNY_NpkjE2-0d2ML6oMrKyPPwvNZ11TpSQ6ZXmoJIzbBiqAHVS-6TY_k8yMXUNyxRSFR_DWrDadhPFxzpchdA_BHYiZ8s6GY0ALJ_AOaDrTGkVEhCxC4yPe1L0Y_CGQXrtm--tGhS538OsR46IBY4mtpRkGyJbYOW-gw",
                            "width" : 1632
                        }
                    ],
                    "place_id" : "ChIJCdfogBZ644kR-m7SnhPustE",
                    "price_level" : 2,
                    "rating" : 3.7,
                    "reference" : "CnRtAAAAQpK49W8qlPBFXMqXPdXUrl5d6rxv_SpDUBKHqMkM6_qL1_NeHSZbtbWVEd77mtHUhkPfV_cHGfLfSVQnlKfqPAQdkNAdO6TWGIOVgumTo5qDu_zVzKQU7nO-ltK9EzeOVkUyVtdfL_M0REGP0igGbhIQbybhG9rm7AWqpVoOsiuXbRoUXib-oJTuzquFOlEEpCqF3ezzGPs",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "513 Tremont St, Boston, MA 02116, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3448736,
                            "lng" : -71.0704939
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "bf089c869131d0f86d7ee71962634b479138290f",
                    "name" : "Picco",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 2988,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/106080806079265436074/photos\"\u003eZORRO OZANYAN\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAA-XZ-dQo_nWK2iuxdL3y2ocyBbf5h_swtIOCZELFmkz_ELFT2iMA9D8FGZh6Ijp4N4P2RfVqImvzBuC8a29nfQI9yAdBN5PtNZ7TjDdAFaBjtJkYE5aPubLa-rK7PQrHQEhBmZa9zVAMfRxbcRieB1tGvGhSz35KpD0Eap9NQmNE-5hDu3JLFEA",
                            "width" : 5312
                        }
                    ],
                    "place_id" : "ChIJje0UgG1644kRcPWmLHHHZo4",
                    "price_level" : 2,
                    "rating" : 4.5,
                    "reference" : "CmRZAAAA_iEc49snxtxxmrEL60BfOemsUnx_Wxo-dHkVo9ohQXZMuXH3d1lBfP0xKZQFV8dpx5B_lvCDGRXcN-iEz4ziA2Y7Uz5xT8DDiLEPkTjcQtmWsQAd9KdurU-mUxtyXghkEhA82pA1dnRbb69PLG0OZmVrGhSWMGkdXuy3j9LXKrN9EytWNk0quw",
                    "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "150 Tremont St, Boston, MA 02111, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3548749,
                            "lng" : -71.0631131
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "1ed36c4550d2b2aa8d6c50cebc39c1bde141c6f8",
                    "name" : "Sal's Pizza",
                    "opening_hours" : {
                        "open_now" : false,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 322,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/102022186353332499352/photos\"\u003eSal&#39;s Pizza\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAA7ISh5bg1UyKv0MqoajT4AbwTia-Vwb4q2BfwDOViMqZWtfyGJvumTxEWP6fcPvqardiV3bTGVVexZh_IvAf9OXFCb28XB8XJYu5oBLEIp8y7iT942xzXsLNvtfCFlRKrEhCUNoRzHWoKT0Px1zVDf9BsGhQSIAcnYII_CCs-3w27KclBfzdnVg",
                            "width" : 640
                        }
                    ],
                    "place_id" : "ChIJjZFlGJ1w44kR7o8wtLZK2pg",
                    "price_level" : 1,
                    "rating" : 4,
                    "reference" : "CmRfAAAAd6zalNTjAXgu-RyhsPWwyFOeCHbN6c8LIwbQ7_K4lVWnjR-LSkJh5uD-uuRMPRnOPcggXMr__HHxK_7ATKQMH8h8uFFj7ZXuFjPJSArjy8gLh2EZ_1njQMfi01VXor7ZEhDo43UMzC7SZM1K0_cMKZd2GhQMjr38DVOryVy6AbkWDUYeBYob8g",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "289 Hanover St, Boston, MA 02113, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.36377969999999,
                            "lng" : -71.05419909999999
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "07f88890478467ce8c324bc4a19698cc25605f3f",
                    "name" : "Galleria Umberto",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 949,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/108494683401301282362/photos\"\u003etkroos\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAkiQy0qmLJmNzwc0hx-8NnmFgB0jj0twwUOluTNvNj6VALMYKv-gBBNPxEuA4Iuk3VcvwU2vS7J11TSxdDcWRgHIsQhbLQTG-N2NpcGGyV8bwpkBEQzUjFO8OWqKwe5aaEhDLg5aCVFohCnLBBuzG0DvYGhSiigTIzyavtW47XLd0ZI7_kkLJjg",
                            "width" : 1265
                        }
                    ],
                    "place_id" : "ChIJbyGIIYlw44kRgPsk38Af8pU",
                    "price_level" : 1,
                    "rating" : 4.5,
                    "reference" : "CnRkAAAAEasrkbUF08SiZ_qijU6_9fUUMr_15LIfGr9NmtNWUqtB1Qls-QAj9IicqmTawR--Ld1iF9uJhYl-x-4jkW_-4ndfSmT0Kaa6JQ22n8hC-wnLcq7nmnndRrnaCHzN5kOZ0dvc2BVnZ4ooFI57S-q5cRIQbEHTbXjtJrvn0uDyvHIYoRoU67wIfzyroResEsGeYTQGNUfpUKg",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "435 Massachusetts Ave, Boston, MA 02118, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.340563,
                            "lng" : -71.082089
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "5a2dded06b2497c7c1b675d5e0c795f2b74e58e3",
                    "name" : "New York Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 710,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/107592825856827703349/photos\"\u003eNew York Pizza\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAssYCMRoOoxgOPmvaBsT8r_IrPmirBsYobaeiyzDX6-RyKgWPckRJ6Hy9WmawmAB621LR6FnDgQae_am7HMhD1jwQ1EVm-JZhQ8qCE4e6AiziI-tFFlBX-DgggZYeAGqyEhBxHdNJ2oZN76-1tFfPnuFjGhT1_678HVlWyb_94KpzTQBzuSCP1Q",
                            "width" : 964
                        }
                    ],
                    "place_id" : "ChIJ5_BB5BZ644kRsXMvifvUw50",
                    "price_level" : 2,
                    "rating" : 3.7,
                    "reference" : "CnRiAAAAlEYdspbIR_XNtLxqKQ0Z6q5L95h6C6TYrn2ZjhT-eNkDHKTEnTsuOoZb8-d5m5v5t8OWop37luBrxJ4GioKd3r2wea3R9Kgge9Cm3z0ClhDH_ZxK1w_jVOlDE2MMnfXIOcNR98F6773lKhWcHbeR5RIQX7QB2kUOH9RKJgpm3fp9IhoUebm1cSmiRQpf_GBrKyFGqE3GVtQ",
                    "types" : [
                        "meal_takeaway",
                        "meal_delivery",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address" : "735 Huntington Ave, Boston, MA 02115, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3340932,
                            "lng" : -71.1054297
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "90fb43e2f5e7c891e7c09ba17829e435eba4bbce",
                    "name" : "Penguin Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1365,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\"\u003eZAGAT\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAV8Ds7w0OTPD_gbghiXiuQlYTxbT1ukw_XxV5gUfemr96qxkQ4evO22R3t_DfcCGVVzdz7YNeO7PY46QwGcYF1NWytqPgY7RVHvDsabjqQ0kfdpA44WdnCMmxt3DpnRj2EhBSRDlWKgHHBaY1w1ETv-3BGhThws7A3S2p55g0MuwTq0GCKMufuw",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJaTlkHI9544kRQdh3DrnC3Xk",
                    "price_level" : 2,
                    "rating" : 4,
                    "reference" : "CmRgAAAAgu7z6HLQl6sK0aexEzvqCutSpPN-CPHroUxCUv0BLwJGMPWGJIOBvabsHjNSeBXcQDfwfloM9uPcQkZ2kAyqKKYfuOqcNbJwMRZsjLljhVhBxU0MiT3KwE9AJBSQAkRgEhCK8id2XJMmUFY2cgu3mmU1GhRuxJthuYdi7mVeIBhpxP3IbvuBLA",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "20 Charles St, Boston, MA 02114, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3566942,
                            "lng" : -71.06991889999999
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "2e865d233c8845ff70ed922f860e0b5a4ebbd921",
                    "name" : "The Upper Crust Pizzeria",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "place_id" : "ChIJ6UEbKZ9w44kRlp7H9kZNQps",
                    "price_level" : 2,
                    "rating" : 3.7,
                    "reference" : "CnRsAAAA0eWTPZHIA86W2O971gV-W6-Y3U-xWSXwT4C-h_zyLcosi9KxD_btQ7KGXCBtiIezMiu62TZ5s_RdTUz4U4L_Sj7e5mhtIkBUiK4JjFKbu8--4tx4UX1iroJNkdusMlyA0WsJRBT3lR3U_4qiRk4KvxIQIEf3Kb_dwQqZ-2rjFe7iEBoU0ImLzqKn3YyWp43Fhkaa7Fnklm0",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "69 Salem St, Boston, MA 02113, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.36336699999999,
                            "lng" : -71.05583799999999
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "9367781800a2f366b32eb444244a48dcfe43822e",
                    "name" : "Ernesto's Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1365,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\"\u003eZAGAT\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAUkU5yCIophun780ubSnnc1fzujFDJFeetbiLDf4vWexPtMxbeGOrf1_cPcutmI9fP5cIfVIAZIA6Nyd-VVvy4pGsxi_mQ9qhCKXfq0GU32CXdjh82WSJwQYnE-KiRrRXEhDjmZjv34WoedOOQ_gcpZENGhSAn40Vm_5c8MQ7Mq51r_N4r4Zo5w",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJOW4E0iBx44kRGPwnBeo0a5U",
                    "price_level" : 1,
                    "rating" : 4.4,
                    "reference" : "CnRjAAAA9Ferz6q8iRuvKFpSw6YYeyHIDXQXnnXAumGFVPKduqVuzDEyNgvKQzb7Gz9wrVA8hPyow8MP8mL_n4vcCbEv5DPla6KWsHIO-fADLohr_41GxoFfvEkw95eJ020hUYdnETfuf0HcXt_8GPQGB-x9FBIQWBtt15T1BoFBZrWA3ims7RoU4OCVa-AxHYOIkYEj1TClsp8EHco",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "1 Stuart St, Boston, MA 02116, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3510603,
                            "lng" : -71.0631071
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "9dbb5d986050671fab1e3035890d9e63f6a0bd58",
                    "name" : "Boston Kitchen Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "place_id" : "ChIJ7V9fn3d644kRzotUsPPwfik",
                    "price_level" : 1,
                    "rating" : 4.4,
                    "reference" : "CnRnAAAAy6n-kZmh6vMv4snW7adX2bDAEWK5sWG6cOREB6mDPldkIG9K_l2IyF63G4S-YKnCXCXsufBFaK3shzjil-LWglcxZYthwcNP2k45W47wkLE9KlbkGXPziZcqj1UsP6dHdTMEUb9tOoi0k1JIT-BV9BIQE2UDSg9S0wOIJ_3Pr17k7hoUHh_YsgNw_be87JlPkK58i2FJPO0",
                    "types" : [
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address" : "111 Chelsea St, Boston, MA 02128, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3726891,
                            "lng" : -71.03525599999999
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "659c2cb9c7ebf93055bcf8387305b25fbc6a9a96",
                    "name" : "Santarpio's Pizza",
                    "opening_hours" : {
                        "open_now" : false,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1365,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\"\u003eZAGAT\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAA_1Qcwg_jdaVKQL9wVgQnk7Ri4BDFm1jrKLXIWs0t3koNGCYlv_VbhAf6jxk2acSjdUm6e3H-OQfgnhPptwkSMjzA9o8sv-nKtG9wwj-sZtPX4nGmeqLTvZWp-2QtvmRwEhCHJ5osV43gHD465dOeoPJ6GhRWeV7JEeAfywc2EiRDIIT6WIGoBg",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJ05TyhURw44kRxqoBZ3mJu-M",
                    "price_level" : 2,
                    "rating" : 3.8,
                    "reference" : "CnRlAAAAjoBtJDtXC16CjfL67zXSaXQB5OeKh-T712WBHYqVQCa3BezVxqywAGteNSeAqcSqrb4EFRn1FFCwa0GB1H5yjH1nJfiG3X4lBLAR6Al3DnUy6XJbwqRbUqWCC9jYzdfZ-neiZ8GCu2eW4XcvNbyyYhIQBk5GL7IsuYJ-N4809XDNzRoUoAxZ5XNxjmp0lO2cIcOtzgRJ8q0",
                    "types" : [ "bar", "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "1124 Boylston St, Boston, MA 02215, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3467595,
                            "lng" : -71.088944
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "ad9d698f07bd12ff89bd586cc7f011c45e45e6fa",
                    "name" : "Crazy Dough's Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1365,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/104111246635874032234/photos\"\u003eZAGAT\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAFmIwC_BVTeYf5zpAjYlVJjGXO67NhghgY8uOHwxxX6Z-ND6YqK-Hh2nntu6aezn9KFVUUSuyog4Ka0hXiT3VQBAqMHknwUWPoALK_G5aLDTyl4lODhR21setzpfXV1OUEhAM9RJ6B8aunNaeCx1AbJLrGhTNHnqU7YRCqGWpe0GfC4OEcxWG-A",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJj8ORGBt644kRbIIWeG_udik",
                    "price_level" : 1,
                    "rating" : 4,
                    "reference" : "CnRmAAAAsKmFFlwjnk6mu6-Bao_Cv0bK2yGn0SnZYDBJCnfGPbuqJVRovGeukJ7rovTwNsYekzODveWI2sWZnKqCIcScQYDz8vHTUrdyjUmVs6AbDd9iCTsuCBLD1W3oAXIantitoGVK_HnyW0wRmb0kjVpWuxIQ_JyPQRTcgpEHoCCD1Fh01hoUmoOhs5s87FLVas9hrOvRB-vOJIE",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "47 Langley Rd, Newton Centre, MA 02459, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3301856,
                            "lng" : -71.1921557
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "8d79210be1206c429123e5fc088999823ed7be15",
                    "name" : "Sweet Tomatoes",
                    "opening_hours" : {
                        "open_now" : false,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 500,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/102725306327199054767/photos\"\u003eSweet Tomatoes\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAATwBrRpAdDs1PCmjvzms02OXogw661oQwWnqetBuguEXYTpBK9-M802ucyejOxDGaMcn5ztitrLx1a8sYUfRKhJFrJGN4EyOYKbRgMpMUHs5gShf2osLzae0ZuW8rf1NnEhBi1b-4HqASUFWv_jETI9tQGhS_uRHY8ctKOJ_foV-MOI0AYvgT7w",
                            "width" : 396
                        }
                    ],
                    "place_id" : "ChIJ00BVeIJ444kRarVuAw22vN8",
                    "price_level" : 2,
                    "rating" : 4.3,
                    "reference" : "CnRiAAAAoA6nERZmh64qS-6BFwKn-aJ-4gm1qJYXFGSWschrTHfYgToBT8Bs0UCONe9vQbSpyOdZ_pCbmQamCuepwlG3oVzmFJNQUnk_gWMktlL3Wi2j06V56Mb1U5erCD4m7HUEMUFiqSq_rGPv1HiF1VmZEBIQmM3DKoSROFM9mACaa7nKZhoUiPEQkOPSmTvprgtjsoOHWyibgIA",
                    "types" : [
                        "store",
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address" : "106 Blackstone St, Boston, MA 02109, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3616106,
                            "lng" : -71.0564751
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "f46b24864bf6c7393509f526fa6b0b003e970bc9",
                    "name" : "Haymarket Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 768,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/117808388227050098529/photos\"\u003eal s\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAA6DJdqgb4DFMyt54N5gicCJAHhGSqnrgQlQMkXQmD__BQsKs-o9tdLq-ma26qsCiCHUqFFIkY6yR9wbRo_19oh3eP2BgvJdcpdI5jsMaFTxe_7f7FDfCzrrnWiWL8skjfEhAkti7rfZP7wx2yZ8kzIULuGhQIUsKWg1sXsjO4Yvh-2Yd2bQ8EVA",
                            "width" : 1024
                        }
                    ],
                    "place_id" : "ChIJ1-iQV49w44kRis_DbMCWXNs",
                    "price_level" : 1,
                    "rating" : 4,
                    "reference" : "CnRjAAAAEWLceGtZDOljCXf3OTDzNbaig3RH-Nwwc18nmy1_rTKVvwIQC6VxkOKw8JUREYZxn3MBWauax7kjaftFP6eWTZ7y0jgSjRBygsBFvV3xelQcNQ2sYNpTSFDjWm6-nPyT5hCDY3wXeyjejDjRel55FhIQVEnaM8GrWYRYZutul9fCXxoUQamCChADeo9evM1ImfAlvSZsD2s",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "474 Saratoga St, East Boston, MA 02128, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.38013490000001,
                            "lng" : -71.0272798
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "571e54bcbc38e14afb4e75b7795ce0bc5839a284",
                    "name" : "DaCoopas Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1440,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/112360007489189424611/photos\"\u003emark smith\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAARPZ3xaxZ8xbljoRQvqHgUXVC-k1AX7B29T4jdcMbb1Co2g2NT55x_sPliH9_WtB5H-5PucwWFgHK4ivAen8TSofsDMbggPEbVdvAkY16wU9-HEb3V_aXwP-os4qCzYV3EhBfGd9gHzK_6p4c469lqrlpGhQcWpRi6ICNRSLULlgYVYrX-nekug",
                            "width" : 2560
                        }
                    ],
                    "place_id" : "ChIJzYpO9Elw44kRwPSE3huskr8",
                    "price_level" : 2,
                    "rating" : 4.2,
                    "reference" : "CnRiAAAAiYNE_MJpdFz8Dv48HLC7jhJakueFLofWbv03kcMxyGk-DSz6R5eIftBzXsgrTmcCQD3AuDXj7Kai33DDqctfPxVCKJsFwyt0iXoztKODoQfiSeD6aM-OWSKyW3uMZV1Votaaz-AVg-Wx-6c5eAnuhxIQOGnN5G6TUrwEk1pGJTL3qxoUyP4Mmlt4UV3z_sVodTO0r6anhBM",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "395 Dorchester St, Boston, MA 02127, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3300435,
                            "lng" : -71.056529
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "80bc8dc3d69d1f8d25dfc90fc4f4e97410ca96c8",
                    "name" : "Andrew Square House of Pizza",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "place_id" : "ChIJOcPfOlx644kReb0LVj5nnMI",
                    "price_level" : 1,
                    "rating" : 4.3,
                    "reference" : "CnRwAAAAoKTjomm4TKZGP7cDWwDRKlT_yGOKC0QKT6OiIuWLofvVdN32y_yPmbgNH7uXQyvh-GdUyUBwlEpe1hLnzZgEpen9WN7YnL2lGHDXei14HlERq1ZkW_pTlStv_EIfJPBlK1eQKF8LCZxty0E1dcIcPxIQg3FzEWnI4YJiD9HCgqQT2hoUfQt_2ddmT4g2v39pGh3eo3MW9Bk",
                    "types" : [ "restaurant", "food", "point_of_interest", "establishment" ]
                },
                {
                    "formatted_address" : "40 Hampshire St, Cambridge, MA 02139, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.366361,
                            "lng" : -71.092006
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "713d028b9f9a9dcf75c016d10c932dc1999d399a",
                    "name" : "Emma's",
                    "opening_hours" : {
                        "open_now" : false,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1536,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/114957845505329184181/photos\"\u003eChris Rich\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAArKvImMtrAiC7fkAx1vNLEyukkDMKj92mo6YO1C0bZcD-NvM2G8Fok2a3cPsW6zHadFR6GZkryDU1cRQyoVhtN8ZkJbmWIaAZHBjnEOWT0CXvk8YKc0ilrGwak-YOWE1FEhDEq1aLfzuSLjH_HKci8h45GhTimUfcXNYKUVXD6Z6BKKuj1Zb__g",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJtWva561w44kRJsgRqyFkpFY",
                    "price_level" : 2,
                    "rating" : 4.3,
                    "reference" : "CmRZAAAAWIIdyXj-nK-g9sVQDS48Q_UMHk44TzJGaMju4_Vh0U_5ghlvdeC-2faH3GV4JlZls4quvOh4mR7bUM0xFzo0lWemklsmvwlvK02VY-BQyOMFA_66-f9wCPWocyQ2tV_3EhDi3Gm_diuOA-ll-nIHucVkGhQuOXlK_GbJopqMjF_M0U7YYsE28g",
                    "types" : [
                        "meal_delivery",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address" : "280 Cambridge St, Boston, MA 02114, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.360961,
                            "lng" : -71.068055
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "894ac3f04127684ffc844bc5dd81339f8c24becd",
                    "name" : "Felcaro Pizzeria",
                    "opening_hours" : {
                        "open_now" : false,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 500,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/102867336369623680606/photos\"\u003eFelcaro Pizzeria\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAQz9HXijTqIADGH7mKDK6S8g0ehmw33BTOXEDv1UatQxwITsvA_JlkxmpDmOPk1e3fTP5UhIIih9AjD4dseMGhpnkPF73qM5Bz9BRLl0717wLoveIPWlFCds9VaFcgM9qEhABaErdgk51_6gfDeMk9y-nGhQCseHfo-qSELPMfsrhXM4cYN9yfg",
                            "width" : 750
                        }
                    ],
                    "place_id" : "ChIJFY1udJlw44kRAMTl43sRmyA",
                    "price_level" : 2,
                    "rating" : 3.5,
                    "reference" : "CnRjAAAA7S0igihpcKNCBJW7uUWhua5gGgrRCcJWsIY09wcP-RXO5HOZFsK1v9c3sh4lJZ5CL-Pp5bchZLBXeOf09vkkW-2-JvdgbIuGv46KpU22xoJE8dADtmfs9j9ha5lZ2zHC3P_ruE2vGo7rTph72CJgIxIQUhHgfajY9O0exHY1Oa-F6xoUuRR1OgTpvAbqWjJsvGO3UgsAXGc",
                    "types" : [
                        "store",
                        "meal_delivery",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                },
                {
                    "formatted_address" : "82 Summer St, Boston, MA 02110, United States",
                    "geometry" : {
                        "location" : {
                            "lat" : 42.3540169,
                            "lng" : -71.0580935
                        }
                    },
                    "icon" : "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
                    "id" : "15496efd065eab6fcd87d985c7d27168801c4b18",
                    "name" : "Al Capone",
                    "opening_hours" : {
                        "open_now" : true,
                        "weekday_text" : []
                    },
                    "photos" : [
                        {
                            "height" : 1536,
                            "html_attributions" : [
                                "\u003ca href=\"https://maps.google.com/maps/contrib/108560602612051538906/photos\"\u003eDavid Lish\u003c/a\u003e"
                            ],
                            "photo_reference" : "CmRdAAAAHc-HRyYO0u1CI-f0LvrbMACs7B35iNtLOyArTgIRuQHEulhPgAbxTG9VHAqXPUMjJ4Qkl73ghEv0U-sftm7IZOhy_x8VV7YG2DzpXquOI5ZpHK8kto3bQfsgDuU2OeDxEhB0RfVeNMy8MITTPQREC9Z4GhR82A-W6vh5QNdO4UrpNhfXwuM9zw",
                            "width" : 2048
                        }
                    ],
                    "place_id" : "ChIJ2-XtW4Jw44kRABSn6QGFdP0",
                    "price_level" : 2,
                    "rating" : 4.2,
                    "reference" : "CmRdAAAANYkWHeyu8DxCRIj7QPn4dL71jUgAJdTDOcLOJdolBFqkhCRAkamFqyICYO6eleo273fsheUl__f5txCyUYEFlHnNIRyhKFoWkSfYGVtrAl3bJhH9YhbMug9U_qcT-Q0BEhBQclIjd0laMzVLdFSxe2XXGhQxmXx7jgwMvyU792PFT4aXCfOgsA",
                    "types" : [
                        "meal_takeaway",
                        "restaurant",
                        "food",
                        "point_of_interest",
                        "establishment"
                    ]
                }
            ],
            "status" : "OK"
        };

        var api = {
           // searchPlace: searchPlace,
           // searchBusiness: searchBusiness,
           // placesWithSearchBox:placesWithSearchBox,
           // searchPlaces:searchPlaces,
           // searchResults:searchResults,
           // webSearch : webSearch,
           // newGoogle : newGoogle,
            initMap : initMap,
            render : render,
            initAutocomplete: initAutocomplete,
            searchPlaces : searchPlaces
        };
        return api;

        function initMap(search, callback){


            var pyrmont = {lat: 42.3342087, lng: -71.0924773};

            map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 15,
            });

            infowindow = new google.maps.InfoWindow();
            var service = new google.maps.places.PlacesService(map);
            service.textSearch({
                location: pyrmont,
                radius: 500,
                query: search
            }, callback);


        }

        function render(results, status) {
            if (status === google.maps.places.PlacesServiceStatus.OK) {
                for (var i = 0; i < results.length; i++) {
                    createMarker(results[i]);
                }
            }
        }

        function createMarker(place) {
            var placeLoc = place.geometry.location;
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });

        }


        function searchPlaces(query){
            console.log(query);
            return $http.get('/api/places/search?search='+query);

        }

        /*
         var myLatLng = {lat: -25.363, lng: 131.044};

         var map = new google.maps.Map(document.getElementById('map'), {
         zoom: 4,
         center: myLatLng
         });

         var marker = new google.maps.Marker({
         position: myLatLng,
         map: map,
         title: 'Hello World!'
         });

         */

        function initAutocomplete(callback) {
        var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -33.8688, lng: 151.2195},
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });

            // Create the search box and link it to the UI element.
            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);

            // Bias the SearchBox results towards current map's viewport.
            map.addListener('bounds_changed', function() {
                searchBox.setBounds(map.getBounds());
            });

            var markers = [];
            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function() {
                var places = searchBox.getPlaces();

                if (places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach(function(marker) {
                    marker.setMap(null);
                });
                markers = [];

                // For each place, get the icon, name and location.
                var bounds = new google.maps.LatLngBounds();
                places.forEach(function(place) {
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };

                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));

                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
                callback(places);
            });


        }
         /*

        function searchPlace(query, callback) {



            var base_url = "https://maps.googleapis.com/maps/api/place/textsearch/json?key=AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8&query=";

            $http.get(base_url + query)
                .success(callback);

        }


        function searchResults(callback){
            callback(searchMyPlaces);
        }

        function webSearch(query, callback){

            var url = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=pizza in boston&key=AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8&callback=JSON_CALLBACK';
            var key = 'AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8';
            //url.replace("QUERY_TO_SEARCH",query);

            $http.jsonp(url).success(callback);


        }

        function searchPlaces(query, callback){

            var map;
            var infowindow;
            var mainResults;


                var pyrmont = {lat: -33.867, lng: 151.195};

                map = new google.maps.Map(document.getElementById('map'), {
                    center: pyrmont,
                    zoom: 15
                });

                infowindow = new google.maps.InfoWindow();
                var service = new google.maps.places.PlacesService(map);
                service.nearbySearch({
                    location: pyrmont,
                    radius: 500,
                    type: ['store']
                }, callback1);


            function callback1(results, status) {
                mainResults=results;
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }
                }
            }

            function createMarker(place) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }

            callback(map);

    }

        function placesWithSearchBox (callback){
            var places;
            var map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -33.8688, lng: 151.2195},
                zoom: 13,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            });


            var input = document.getElementById('pac-input');
            var searchBox = new google.maps.places.SearchBox(input);
            map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
            map.addListener('bounds_changed', function () {
                searchBox.setBounds(map.getBounds());
            });


            var markers = [];


            // Listen for the event fired when the user selects a prediction and retrieve
            // more details for that place.
            searchBox.addListener('places_changed', function () {
                places = searchBox.getPlaces();


                if (places.length == 0) {
                    return;
                }

                // Clear out the old markers.
                markers.forEach(function (marker) {
                    marker.setMap(null);
                });
                markers = [];
                callback(places);
                // For each place, get the icon, name and location.

                var bounds = new google.maps.LatLngBounds();
                places.forEach(function (place) {
                    var icon = {
                        url: place.icon,
                        size: new google.maps.Size(71, 71),
                        origin: new google.maps.Point(0, 0),
                        anchor: new google.maps.Point(17, 34),
                        scaledSize: new google.maps.Size(25, 25)
                    };


                    // Create a marker for each place.
                    markers.push(new google.maps.Marker({
                        map: map,
                        icon: icon,
                        title: place.name,
                        position: place.geometry.location
                    }));

                    if (place.geometry.viewport) {
                        // Only geocodes have viewport.
                        bounds.union(place.geometry.viewport);
                    } else {
                        bounds.extend(place.geometry.location);
                    }
                });
                map.fitBounds(bounds);
            });


        }

        function searchBusiness(businessId, callback) {
            var base_url = "https://maps.googleapis.com/maps/api/place/details/json?key=AIzaSyA5JatahzabYm8Sob8yroyA2utO5VOpdP8&placeid=";
            $http.get(base_url + businessId)
                .success(callback);
        }

        function newGoogle(query, callback){
            var map;
            var service;
            var infowindow;

                if(query){
                    initialise();
                }

                function  initialise() {
                    var pyrmont = new google.maps.LatLng(-33.8665433, 151.1956316);
                    console.log(1);
                    map = new google.maps.Map(document.getElementById('map'), {
                        center: pyrmont,
                        zoom: 15
                    });

                    var request = {
                        location: pyrmont,
                        radius: '500',
                        query: query
                    };

                    service = new google.maps.places.PlacesService(map);

                    service.textSearch(request, mark);

                }

            function mark(results, status) {
                if (status == google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        var place = results[i];
                        createMarker(results[i]);
                    }
                }
                //callback(results,status);
            }
            function createMarker(place) {
                var placeLoc = place.geometry.location;
                var marker = new google.maps.Marker({
                    map: map,
                    position: place.geometry.location
                });

                google.maps.event.addListener(marker, 'click', function() {
                    infowindow.setContent(place.name);
                    infowindow.open(map, this);
                });
            }




        }
        */
    }
})();
