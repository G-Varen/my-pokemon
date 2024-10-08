import { EffectCoverflow, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Pokenom from './pokemon';




const pokemons = [{
  "id": 1,
  "name": {
    "english": "Bulbasaur",
    "japanese": "フシギダネ",
    "chinese": "妙蛙种子",
    "french": "Bulbizarre"
  },
  "type": [
    "Grass",
    "Poison"
  ],
  "base": {
    "HP": 45,
    "Attack": 49,
    "Defense": 49,
    "Sp. Attack": 65,
    "Sp. Defense": 65,
    "Speed": 45
  }
},
{
  "id": 2,
  "name": {
    "english": "Ivysaur",
    "japanese": "フシギソウ",
    "chinese": "妙蛙草",
    "french": "Herbizarre"
  },
  "type": [
    "Grass",
    "Poison"
  ],
  "base": {
    "HP": 60,
    "Attack": 62,
    "Defense": 63,
    "Sp. Attack": 80,
    "Sp. Defense": 80,
    "Speed": 60
  }
},
{
  "id": 3,
  "name": {
    "english": "Venusaur",
    "japanese": "フシギバナ",
    "chinese": "妙蛙花",
    "french": "Florizarre"
  },
  "type": [
    "Grass",
    "Poison"
  ],
  "base": {
    "HP": 80,
    "Attack": 82,
    "Defense": 83,
    "Sp. Attack": 100,
    "Sp. Defense": 100,
    "Speed": 80
  }
},
{
  "id": 4,
  "name": {
    "english": "Charmander",
    "japanese": "ヒトカゲ",
    "chinese": "小火龙",
    "french": "Salamèche"
  },
  "type": [
    "Fire"
  ],
  "base": {
    "HP": 39,
    "Attack": 52,
    "Defense": 43,
    "Sp. Attack": 60,
    "Sp. Defense": 50,
    "Speed": 65
  }
},
{
  "id": 5,
  "name": {
    "english": "Charmeleon",
    "japanese": "リザード",
    "chinese": "火恐龙",
    "french": "Reptincel"
  },
  "type": [
    "Fire"
  ],
  "base": {
    "HP": 58,
    "Attack": 64,
    "Defense": 58,
    "Sp. Attack": 80,
    "Sp. Defense": 65,
    "Speed": 80
  }
},
{
  "id": 6,
  "name": {
    "english": "Charizard",
    "japanese": "リザードン",
    "chinese": "喷火龙",
    "french": "Dracaufeu"
  },
  "type": [
    "Fire",
    "Flying"
  ],
  "base": {
    "HP": 78,
    "Attack": 84,
    "Defense": 78,
    "Sp. Attack": 109,
    "Sp. Defense": 85,
    "Speed": 100
  }
},
{
  "id": 7,
  "name": {
    "english": "Squirtle",
    "japanese": "ゼニガメ",
    "chinese": "杰尼龟",
    "french": "Carapuce"
  },
  "type": [
    "Water"
  ],
  "base": {
    "HP": 44,
    "Attack": 48,
    "Defense": 65,
    "Sp. Attack": 50,
    "Sp. Defense": 64,
    "Speed": 43
  }
},
{
  "id": 8,
  "name": {
    "english": "Wartortle",
    "japanese": "カメール",
    "chinese": "卡咪龟",
    "french": "Carabaffe"
  },
  "type": [
    "Water"
  ],
  "base": {
    "HP": 59,
    "Attack": 63,
    "Defense": 80,
    "Sp. Attack": 65,
    "Sp. Defense": 80,
    "Speed": 58
  }
},
{
  "id": 9,
  "name": {
    "english": "Blastoise",
    "japanese": "カメックス",
    "chinese": "水箭龟",
    "french": "Tortank"
  },
  "type": [
    "Water"
  ],
  "base": {
    "HP": 79,
    "Attack": 83,
    "Defense": 100,
    "Sp. Attack": 85,
    "Sp. Defense": 105,
    "Speed": 78
  }
},
{
  "id": 10,
  "name": {
    "english": "Caterpie",
    "japanese": "キャタピー",
    "chinese": "绿毛虫",
    "french": "Chenipan"
  },
  "type": [
    "Bug"
  ],
  "base": {
    "HP": 45,
    "Attack": 30,
    "Defense": 35,
    "Sp. Attack": 20,
    "Sp. Defense": 20,
    "Speed": 45
  }
},
{
  "id": 11,
  "name": {
    "english": "Metapod",
    "japanese": "トランセル",
    "chinese": "铁甲蛹",
    "french": "Chrysacier"
  },
  "type": [
    "Bug"
  ],
  "base": {
    "HP": 50,
    "Attack": 20,
    "Defense": 55,
    "Sp. Attack": 25,
    "Sp. Defense": 25,
    "Speed": 30
  }
},
{
  "id": 12,
  "name": {
    "english": "Butterfree",
    "japanese": "バタフリー",
    "chinese": "巴大蝶",
    "french": "Papilusion"
  },
  "type": [
    "Bug",
    "Flying"
  ],
  "base": {
    "HP": 60,
    "Attack": 45,
    "Defense": 50,
    "Sp. Attack": 90,
    "Sp. Defense": 80,
    "Speed": 70
  }
}
]

function PokeSwipe() {
  return (
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'3'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 20,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className='my-swiper'
    >

      {
        pokemons.map((pokenom, index) => {
          return (
            <SwiperSlide key={index}>
              <Pokenom
                name={pokenom.name.english}
                index={pokenom.id}
                type={pokenom.type}
                hp={pokenom.base.HP}
                attack={pokenom.base.Attack}
                defense={pokenom.base.Defense} />
            </SwiperSlide>
          )
        })}
    </Swiper>

  )
}

export default PokeSwipe;
