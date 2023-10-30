import Category from '../db/categoryModel.js';

const categories = [
    {
        img:'https://articles-images.sftcdn.net/wp-content/uploads/sites/2/2018/02/android-accion.jpg',
        name:'Acción',
        type: 'game'
    },
    {
        img:'https://i0.wp.com/www.solojugadores.com/wp-content/uploads/2023/02/DayZ-juego-de-superviencia-online.webp?resize=1024%2C573&ssl=1',
        name:'Supervivencia',
        type:'game',
    },
    {
        img:'https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/11/mejores-juegos-terror-2022-2872705.jpg?tf=3840x',
        name:'Terror',
        type:'game',
    },
    {
        img:'https://www1.minijuegosgratis.com/v3/games/thumbnails/244317_7_sq.jpg',
        name:'Puzzle',
        type:'game',
    },
    {
        img:'https://sm.ign.com/t/ign_es/screenshot/default/wp4519264_56pw.1280.jpg',
        name:'Deportes',
        type:'game',
    },
    {
        img:'https://blog.latam.playstation.com/tachyon/sites/3/2023/05/4e35d40a3010eed12269780cc5cf65557d184012.jpg?resize=1088%2C612&crop_strategy=smart',
        name:'Peleas',
        type:'game',
    },
    {
        img:'https://media.tycsports.com/files/2022/05/23/432018/los-mejores-juegos-de-carreras-con-descuentos-increibles-en-steam_1440x810_wmk.webp',
        name:'Carreras',
        type:'game',
    },
    {
        img:'https://s3.abcstatics.com/media/bienestar/2019/09/17/futbol-1-kU3C--1248x698@abc.jpg',
        name:'Futbol',
        type:'sport',
    },
    {
        img:'https://media.tycsports.com/files/2022/09/30/486024/voley_862x485.webp?v=1',
        name:'Vóley',
        type:'sport',
    },
    {
        img:'https://media.a24.com/p/f2f0f853632807bd0169c8b551f15e90/adjuntos/296/imagenes/008/193/0008193262/la-historia-del-basquetbol.jpeg',
        name:'Básquet',
        type:'sport',
    },
    {
        img:'https://cdn.pixabay.com/photo/2021/06/09/05/31/padel-6322450_1280.jpg',
        name:'Pádel',
        type:'sport',
    },
    {
        img:'https://s1.abcstatics.com/media/bienestar/2019/08/02/tenis-abecedario-kgNF--620x349@abc.jpg',
        name:'Tennis',
        type:'sport',
    },
    {
        img:'https://www.clarin.com/img/2019/12/04/xrLeAeXU_360x240__1.jpg',
        name:'Handball',
        type:'sport',
    },
    {
        img:'https://www.lavanguardia.com/andro4all/hero/2021/03/apps-para-hacer-crossfit.jpg?width=1200&aspect_ratio=16:9',
        name:'Crossfit',
        type:'sport',
    }
]



export const seedCategory = async () => {
  try {
    await Category.insertMany(categories);
    
    console.log('Inserto con exito semilla categoria.');
  } catch (error) {
    console.error('Error semilla categoria:', error);
  }
};

