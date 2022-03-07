var main_items = {
    "title": ["Manzanas del Cuidado <br> Ciudad de Bogotá <br> Colombia", "Safety Blocks <br> Bogotá <br> Colombia"],
    "acerca_de": ["Sobre el proyecto", "About the project"],
    "description": ["Sobre el proyecto", "About the project"],
    "main_language": "english",
    "map": {
        "center": [-74.1914, 4.6004], // X and Y
        "zoom": 9.5,
        "style": "mapbox://styles/mapbox/light-v10"
    }
}

var categories = [
    [1, 'Oferta pública en cuidados', 'Public offer in care'],
    [2, 'Oferta privada en cuidados', 'Private offer in care'],
    [3, 'Educación', 'Education'],
    [4, 'Cultura', 'Culture'],
    [5, 'Movilidad', 'Mobility'],
    [6, 'Seguridad', 'Security'],
    [7, 'Manzanas del cuidado', 'Safety blocks'],
    [8, 'Indicadores estadísticos', 'Statistical indicators'],
]

var subgroup1_categories = [
    [1,'Indicadores generales', 'Main indicators'],
    [2,'Indicadores de demanda', 'Demand indicators'],
    [3,'Indicadores socioterritoriales', 'Socio-territorial indicators'],
    [4,'Presupuestos participativos', 'Participatory budgets'],
]

var subgroup2_categories = [
    [1, 3, 'Dimensiones de la pobreza', 'Dimensions of poverty'],
    [2, 3, 'Privaciones en el hogar', 'Home deprivation'],
    [3, 3, 'Subclasificaciones tipos de hogar', 'Household subclassifications'],
    [4, 3, 'Trabajo y seguridad social', 'Work and social security'],
    [5, 3, 'Transporte y movilización', 'Transportation and mobilization'],
]

var subgroup3_categories = [
    [1, 5, 'Medio de transporte para ir a trabajar (hombres)', 'Means of transportation to go to work (men)'],
    [2, 5, 'Medio de transporte para ir a trabajar (mujeres)', 'Means of transportation to go to work (women)'],
    [3, 5, 'Porcentaje de hogares que se demoran menos de 15 minutos a un destino', 'Percentage of households that take less than 15 minutes to a destination'],
]

var layers = [

//[1, 'Oferta pública en cuidados', 'Public offer in care'],
[1, 1, "geonode:jardin_infantil" , 'Jardines infantiles', 'Kindergartens'],
[2, 1, "geonode:centro_proteger" , 'Centro proteger', 'Protect center'],
[3, 1, "geonode:centro_amar" , 'Centro amar', 'Love center'],
[4, 1, "geonode:creciendo_familia" , 'Creciendo en familia', 'Growing up as a family'],
[5, 1, "geonode:comedor_comunitario" , 'Comedor comunitario', 'Community dining room'],
[6, 1, "geonode:envejecimiento_activo" ,'Envejecimiento activo y feliz', 'Active and happy aging'],
[7, 1, "geonode:atencion_personas_mayores_discapacidad", 'Atención a personas mayores con discapacidad', 'Care for elderly people with disabilities'],
[8, 1, "geonode:atencion_ninos_discapacidad0", 'Atención a niños, niñas y adolescentes con discapacidad', 'Attention to children and adolescents with disabilities'],
[9, 1, "geonode:casa_oportunidades_mujeres", 'Casa de igualdad de oportunidades para mujeres', 'House of equal opportunities for women'],
[10, 1, "geonode:casa_pensamiento_intercultural", 'Casa de pensamiento intercultural', 'House of intercultural thought'],

//    [2, 'Oferta privada en cuidados', 'Private offer in care'],
[11, 2, "geonode:coordenadas_empresas", 'Empresas del Municipio de Bogotá según clase de actividad económica', 'Companies of the Municipality of Bogotá according to type of economic activity'],

//    [3, 'Educación', 'Education'],
[12, 3, "geonode:colegios", 'Colegios', 'Schools'],

//    [4, 'Cultura', 'Culture'],
[13, 4, "geonode:biblored", 'Red Biblioteca Pública - Biblored', 'Public Library Network - Biblored'],
[14, 4, "geonode:bibliotecas_comunitarias", 'Bibliotecas Comunitarias', 'Community Libraries'],

//    [5, 'Movilidad', 'Mobility'],
[15, 5, "geonode:ciclovias", 'Ciclovías', 'Bike paths'],
[16, 5, "geonode:paraderos_zonales_SITP", 'Paraderos', 'Bus stop'],

//    [6, 'Seguridad', 'Security'],
[17, 6, "geonode:estacion_de_policia", 'Estación de policía', 'Police station'],
[18, 6, "geonode:cuadrantes_policia", 'Cuadrantes de policía', 'Police blocks'],
[19, 6, "geonode:comisaria_familia", 'Comisaría de la familia', 'Family police station'],
[20, 6, "geonode:indice_seguridad", 'Puntos de seguridad nocturna mujeres', 'Night security points for women'],

//    [7, 'Manzanas del cuidado', 'Safety blocks'],
[21, 7, "geonode:propuesta_manzanas", 'Localización manzanas del cuidado', 'Location of care blocks'],

//    [1, 8, 'Indicadores generales', 'Main indicators'],
[22, 8, "geonode:tabla_indicadores_actualizada", 'Total de hogares', 'Total households'],
[23, 8, "geonode:tabla_indicadores_actualizada", 'Total de personas', 'Total number of people'],

//    [2, 8, 'Indicadores de demanda', 'Demand indicators'],
[24, 8, "geonode:tabla_indicadores_actualizada", 'Índice de feminidad', 'Femininity index'],
[25, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas menores de 5 años', 'Percentage of people under 5 years of age'],
[26, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas mayores de 64 años', 'Percentage of people over 64 years of age'],
[27, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas mayores de 80 años', 'Percentage of people over 80 years old'],
[28, 8, "geonode:tabla_indicadores_actualizada", 'Relación de dependencia', 'Dependency ratio'],
[29, 8, "geonode:tabla_indicadores_actualizada", 'Personas con dificultades en su vida diaria', 'People with difficulties in their daily life'],

//[1, 3, 'Dimensiones de la pobreza', 'Dimensions of poverty'],
[30, 8, "geonode:tabla_indicadores_actualizada", 'Analfabetismo', 'Illiteracy'],
[31, 8, "geonode:tabla_indicadores_actualizada", 'Inasistencia escolar', 'School absence'],
[32, 8, "geonode:tabla_indicadores_actualizada", 'Cuidado primera infancia', 'Early childhood care'],
[33, 8, "geonode:tabla_indicadores_actualizada", 'Acceso a salud', 'Access to health'],
[34, 8, "geonode:tabla_indicadores_actualizada", 'Hacinamiento', 'Overcrowding'],
[35, 8, "geonode:tabla_indicadores_actualizada", 'Pobreza monetaria (DANE)', 'Monetary poverty (DANE)'],

//[2, 3, 'Privaciones en el hogar', 'Home deprivation'],
[36, 8, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen lavadora', '% households that do not have a washing machine'],
[37, 8, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen refrigerador', '% households that do not have a refrigerator'],
[38, 8, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen internet', '% households that do not have internet'],

//[3, 3, 'Subclasificaciones tipos de hogar', 'Household subclassifications'],
[39, 8, "geonode:tabla_indicadores_actualizada", 'Hogares unipersonales con personas de 65 años o más/Total hogares', 'Single-person households with people aged 65 or over / Total households'],
[40, 8, "geonode:tabla_indicadores_actualizada", 'Hogares monoparentales femeninos con menores de 15 años/ Total de hogares', 'Single-parent female households with children under 15 years of age / Total households'],
[41, 8, "geonode:tabla_indicadores_actualizada", 'Hogares monoparentales femeninos con mayores de 65 años/ Total de hogares', 'Female single-parent households with over 65s / Total households'],
[42, 8, "geonode:tabla_indicadores_actualizada", 'Hogares biparentales con menores de 15 años/ Total hogares', 'Two-parent households with children under 15 years of age / Total households'],
[43, 8, "geonode:tabla_indicadores_actualizada", 'Hogares biparentales con mayores de 65 años/ Total de hogares', 'Two-parent households with over 65s / Total households'],
[44, 8, "geonode:tabla_indicadores_actualizada", 'Indice de feminidad de hogares pobres', 'Poor Household Femininity Index'],

//  [4, 3, 'Trabajo y seguridad social', 'Work and social security'],
[45, 8, "geonode:tabla_indicadores_actualizada", 'Tasa de ocupación en mujeres', 'Employment rate in women'],
[46, 8, "geonode:tabla_indicadores_actualizada", 'Mujeres sin cotizar', 'Women without contributions'],
[47, 8, "geonode:tabla_indicadores_actualizada", 'Hombres sin cotizar', 'Men without contributions'],
[48, 8, "geonode:tabla_indicadores_actualizada", 'Hombres que reciben pensión', 'Men receiving pension'],
[49, 8, "geonode:tabla_indicadores_actualizada", 'Mujeres que reciben pensión', 'Women receiving pension'],
[50, 8, "geonode:tabla_indicadores_actualizada", 'Mujeres que se dedican exclusivamente a las tareas del hogar de 15 años o más/Total mujeres de 15 años o más', 'Women who are exclusively dedicated to housework aged 15 years or over / Total women aged 15 years or over'],

// [1, 5, 'Medio de transporte para ir a trabajar (hombres)', 'Means of transportation to go to work (men)'],
[51, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de transmilenio para llegar al trabajo', 'Percentage of use of transmilenio to get to work'],
[52, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses SITP para llegar al trabajo', 'Percentage of use of SITP buses to get to work'],
[53, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de Bus, buseta o colectivo para llegar al trabajo', 'Percentage of bus, minivan or collective use to get to work'],
[54, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de automovil para llegar al trabajo', 'Percentage of car use to get to work'],
[55, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de taxi para llegar al trabajo', 'Percentage of taxi use to get to work'],
[56, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de moto para llegar al trabajo', 'Percentage of motorcycle use to get to work'],
[57, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de bicicleta para llegar al trabajo', 'Percentage of bicycle use to get to work'],
[58, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje que camina para llegar al trabajo', 'Percentage who walk to get to work'],

//[2, 5, 'Medio de transporte para ir a trabajar (mujeres)', 'Means of transportation to go to work (women)'],
[59, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de transmilenio para llegar al trabajo', 'Percentage of use of transmilenio to get to work'],
[60, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses SITP para llegar al trabajo', 'Percentage of use of SITP buses to get to work'],
[61, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses, busetas o colectivos para llegar al trabajo', 'Percentage of use of buses, vans or collectives to get to work'],
[62, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de automovil para llegar al trabajo', 'Percentage of car use to get to work'],
[63, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de taxis para llegar al trabajo', 'Percentage of taxi use to get to work'],
[64, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de bicicleta para llegar al trabajo', 'Percentage of bicycle use to get to work'],
[65, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje que camina para llegar al trabajo', 'Percentage who walk to get to work'],

//[3, 5, 'Porcentaje de hogares que se demoran menos de 15 minutos a un destino', 'Percentage of households that take less than 15 minutes to a destination'],
[66, 8, "geonode:tabla_indicadores_actualizada", 'Centros de cuidado infantil', 'Child care centers'],
[67, 8, "geonode:tabla_indicadores_actualizada", 'Estación TransMilenio o paradero alimentador', 'TransMilenio station or feeder bus stop'],
[68, 8, "geonode:tabla_indicadores_actualizada", 'Paradero buses del SITP', 'SITP bus stop'],
[69, 8, "geonode:tabla_indicadores_actualizada", 'Paradero de transporte público', 'Public transport stop'],
[70, 8, "geonode:tabla_indicadores_actualizada", 'Paradero de transporte intermunicipal', 'Inter-municipal transport whereabouts'],
[71, 8, "geonode:tabla_indicadores_actualizada", 'Parques o zonas verdes', 'Parks or green areas'],
[72, 8, "geonode:tabla_indicadores_actualizada", 'Tienda o supermercado', 'Store or supermarket'],
[73, 8, "geonode:tabla_indicadores_actualizada", 'Droguería o farmacia', 'Drugstore or pharmacy'],
[74, 8, "geonode:tabla_indicadores_actualizada", 'Banco o cajero', 'Bank or teller'],
[75, 8, "geonode:tabla_indicadores_actualizada", 'Centro médico', 'Medical Center'],

//[4, 8, 'Presupuestos participativos', 'Participatory budgets'],
[75, 8, "geonode:tabla_indicadores_actualizada", 'Estrategia de cuidado a cuidadoras, cuidadores y personas con discapacidad', 'Care strategy for caregivers, caregivers and people with disabilities'],

]


/* 
//    [1, 8, 'Indicadores generales', 'Main indicators'],
[22, 8, "geonode:tabla_indicadores_actualizada", 'Total de hogares', 'Total households'],
[23, 8, "geonode:tabla_indicadores_actualizada", 'Total de personas', 'Total number of people'],

//    [2, 8, 'Indicadores de demanda', 'Demand indicators'],
[24, 8, "geonode:tabla_indicadores_actualizada", 'Índice de feminidad', 'Femininity index'],
[25, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas menores de 5 años', 'Percentage of people under 5 years of age'],
[26, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas mayores de 64 años', 'Percentage of people over 64 years of age'],
[27, 8, "geonode:tabla_indicadores_actualizada", 'Porcentaje de personas mayores de 80 años', 'Percentage of people over 80 years old'],
[28, 8, "geonode:tabla_indicadores_actualizada", 'Relación de dependencia', 'Dependency ratio'],
[29, 8, "geonode:tabla_indicadores_actualizada", 'Personas con dificultades en su vida diaria', 'People with difficulties in their daily life'],

//[1, 3, 'Dimensiones de la pobreza', 'Dimensions of poverty'],
[30, 3, "geonode:tabla_indicadores_actualizada", 'Analfabetismo', 'Illiteracy'],
[31, 3, "geonode:tabla_indicadores_actualizada", 'Inasistencia escolar', 'School absence'],
[32, 3, "geonode:tabla_indicadores_actualizada", 'Cuidado primera infancia', 'Early childhood care'],
[33, 3, "geonode:tabla_indicadores_actualizada", 'Acceso a salud', 'Access to health'],
[34, 3, "geonode:tabla_indicadores_actualizada", 'Hacinamiento', 'Overcrowding'],
[35, 3, "geonode:tabla_indicadores_actualizada", 'Pobreza monetaria (DANE)', 'Monetary poverty (DANE)'],

//[2, 3, 'Privaciones en el hogar', 'Home deprivation'],
[36, 3, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen lavadora', '% households that do not have a washing machine'],
[37, 3, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen refrigerador', '% households that do not have a refrigerator'],
[38, 3, "geonode:tabla_indicadores_actualizada", '% hogares que no poseen internet', '% households that do not have internet'],

//[3, 3, 'Subclasificaciones tipos de hogar', 'Household subclassifications'],
[39, 3, "geonode:tabla_indicadores_actualizada", 'Hogares unipersonales con personas de 65 años o más/Total hogares', 'Single-person households with people aged 65 or over / Total households'],
[40, 3, "geonode:tabla_indicadores_actualizada", 'Hogares monoparentales femeninos con menores de 15 años/ Total de hogares', 'Single-parent female households with children under 15 years of age / Total households'],
[41, 3, "geonode:tabla_indicadores_actualizada", 'Hogares monoparentales femeninos con mayores de 65 años/ Total de hogares', 'Female single-parent households with over 65s / Total households'],
[42, 3, "geonode:tabla_indicadores_actualizada", 'Hogares biparentales con menores de 15 años/ Total hogares', 'Two-parent households with children under 15 years of age / Total households'],
[43, 3, "geonode:tabla_indicadores_actualizada", 'Hogares biparentales con mayores de 65 años/ Total de hogares', 'Two-parent households with over 65s / Total households'],
[44, 3, "geonode:tabla_indicadores_actualizada", 'Indice de feminidad de hogares pobres', 'Poor Household Femininity Index'],

//  [4, 3, 'Trabajo y seguridad social', 'Work and social security'],
[45, 3, "geonode:tabla_indicadores_actualizada", 'Tasa de ocupación en mujeres', 'Employment rate in women'],
[46, 3, "geonode:tabla_indicadores_actualizada", 'Mujeres sin cotizar', 'Women without contributions'],
[47, 3, "geonode:tabla_indicadores_actualizada", 'Hombres sin cotizar', 'Men without contributions'],
[48, 3, "geonode:tabla_indicadores_actualizada", 'Hombres que reciben pensión', 'Men receiving pension'],
[49, 3, "geonode:tabla_indicadores_actualizada", 'Mujeres que reciben pensión', 'Women receiving pension'],
[50, 3, "geonode:tabla_indicadores_actualizada", 'Mujeres que se dedican exclusivamente a las tareas del hogar de 15 años o más/Total mujeres de 15 años o más', 'Women who are exclusively dedicated to housework aged 15 years or over / Total women aged 15 years or over'],

// [1, 5, 'Medio de transporte para ir a trabajar (hombres)', 'Means of transportation to go to work (men)'],
[51, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de transmilenio para llegar al trabajo', 'Percentage of use of transmilenio to get to work'],
[52, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses SITP para llegar al trabajo', 'Percentage of use of SITP buses to get to work'],
[53, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de Bus, buseta o colectivo para llegar al trabajo', 'Percentage of bus, minivan or collective use to get to work'],
[54, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de automovil para llegar al trabajo', 'Percentage of car use to get to work'],
[55, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de taxi para llegar al trabajo', 'Percentage of taxi use to get to work'],
[56, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de moto para llegar al trabajo', 'Percentage of motorcycle use to get to work'],
[57, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de bicicleta para llegar al trabajo', 'Percentage of bicycle use to get to work'],
[58, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje que camina para llegar al trabajo', 'Percentage who walk to get to work'],

//[2, 5, 'Medio de transporte para ir a trabajar (mujeres)', 'Means of transportation to go to work (women)'],
[59, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de transmilenio para llegar al trabajo', 'Percentage of use of transmilenio to get to work'],
[60, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses SITP para llegar al trabajo', 'Percentage of use of SITP buses to get to work'],
[61, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de buses, busetas o colectivos para llegar al trabajo', 'Percentage of use of buses, vans or collectives to get to work'],
[62, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de automovil para llegar al trabajo', 'Percentage of car use to get to work'],
[63, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de taxis para llegar al trabajo', 'Percentage of taxi use to get to work'],
[64, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje de uso de bicicleta para llegar al trabajo', 'Percentage of bicycle use to get to work'],
[65, 5, "geonode:tabla_indicadores_actualizada", 'Porcentaje que camina para llegar al trabajo', 'Percentage who walk to get to work'],

//[3, 5, 'Porcentaje de hogares que se demoran menos de 15 minutos a un destino', 'Percentage of households that take less than 15 minutes to a destination'],
[66, 5, "geonode:tabla_indicadores_actualizada", 'Centros de cuidado infantil', 'Child care centers'],
[67, 5, "geonode:tabla_indicadores_actualizada", 'Estación TransMilenio o paradero alimentador', 'TransMilenio station or feeder bus stop'],
[68, 5, "geonode:tabla_indicadores_actualizada", 'Paradero buses del SITP', 'SITP bus stop'],
[69, 5, "geonode:tabla_indicadores_actualizada", 'Paradero de transporte público', 'Public transport stop'],
[70, 5, "geonode:tabla_indicadores_actualizada", 'Paradero de transporte intermunicipal', 'Inter-municipal transport whereabouts'],
[71, 5, "geonode:tabla_indicadores_actualizada", 'Parques o zonas verdes', 'Parks or green areas'],
[72, 5, "geonode:tabla_indicadores_actualizada", 'Tienda o supermercado', 'Store or supermarket'],
[73, 5, "geonode:tabla_indicadores_actualizada", 'Droguería o farmacia', 'Drugstore or pharmacy'],
[74, 5, "geonode:tabla_indicadores_actualizada", 'Banco o cajero', 'Bank or teller'],
[75, 5, "geonode:tabla_indicadores_actualizada", 'Centro médico', 'Medical Center'],

//[4, 8, 'Presupuestos participativos', 'Participatory budgets'],
[75, 8, "geonode:tabla_indicadores_actualizada", 'Estrategia de cuidado a cuidadoras, cuidadores y personas con discapacidad', 'Care strategy for caregivers, caregivers and people with disabilities'],

] */


/* 
var key_messages = [
    [1, ''],
    [2, ''],
    [3, ''],
    [4, ''],
    [5, ''],
    [6, ''],
    [7, ''],
    [8, ''],
    [9, ''],
    [10, ''],
    [11, ''],
    [12, ''],
    [13, ''],
    [14, ''],
    [15, ''],
    [16, ''],
    [17, ''],
    [18, ''],
    [19, ''],
    [20, ''],
    [21, ''],
    [22, ''],
    [23, ''],
    [24, ''],
] */