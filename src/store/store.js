import { configureStore, createSlice } from '@reduxjs/toolkit';

let productData = createSlice({
  name: "product",
  initialState: {
    웜애프터눈: [
      {
        name: '[NEW] 웜 애프터눈',
        discount: '63,300원',
        price: '53,550원',
        volume: '50ml',
        liquid: true,
        note: '따스한 무화과 | 야생화 | 머스크',
        filterCode: 'herbal',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/170827.242331000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9B%9C%EC%95%A0%ED%94%84%ED%84%B0%EB%88%88%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/170830.372873000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9B%9C%EC%95%A0%ED%94%84%ED%84%B0%EB%88%88%2002(hover).jpg',
      }
    ],
    보이드우드: [
      {
        name: '보이드 우드',
        discount: '63,300원',
        price: '53,550원',
        volume: '50ml',
        liquid: true,
        note: '촉촉한 잎사귀 | 자스민 | 스모키 우드',
        filterCode: 'herbal',
        bestCode: true,
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161734.115243000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B3%B4%EC%9D%B4%EB%93%9C%EC%9A%B0%EB%93%9C%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161739.943047000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B3%B4%EC%9D%B4%EB%93%9C%EC%9A%B0%EB%93%9C%2002(hover).jpg',
      }
    ],
    더퍼스트: [
      {
        name: '더 퍼스트',
        discount: '63,300원',
        price: '53,550원',
        volume: '50ml',
        liquid: true,
        note: '릴리 | 일랑 일랑 | 화이트 머스크',
        filterCode: 'floral',
        bestCode: true,
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161611.48149000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%8D%94%ED%8D%BC%EC%8A%A4%ED%8A%B8%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161613.123111000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%8D%94%ED%8D%BC%EC%8A%A4%ED%8A%B8%2002(hover).jpg',
      }
    ],
    잇더피치: [
      {
        name: '잇 더 피치',
        discount: '63,300원',
        price: '53,550원',
        volume: '50ml',
        liquid: true,
        note: '풋사과 | 복숭아 과즙 | 샌달우드',
        filterCode: 'fruity',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161411.756730000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9E%87%EB%8D%94%ED%94%BC%EC%B9%98%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161414.822744000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%9E%87%EB%8D%94%ED%94%BC%EC%B9%98%2002(hover).jpg',
      }
    ],
    블랑드블룸: [
      {
        name: '블랑 드 블룸',
        discount: '63,300원',
        price: '53,550원',
        volume: '50ml',
        liquid: true,
        note: '핑크 페퍼 | 화이트 로즈 | 아이리스',
        filterCode: 'special',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161901.477834000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B8%94%EB%9E%91%EB%93%9C%EB%B8%94%EB%A3%B8%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161903.937238000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%B8%94%EB%9E%91%EB%93%9C%EB%B8%94%EB%A3%B8%2002(hover).jpg',
      }
    ],
    필더베르가못: [
      {
        name: '필 더 베르가못',
        discount: '63,300원',
        price: '53,550원',
        volume: '50ml',
        liquid: true,
        note: '청량한 베르가못 | 미모사 | 시더우드',
        filterCode: 'citrus',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/162611.417626000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%95%84%EB%8D%94%EB%B2%A0%EB%A5%B4%EA%B0%80%EB%AA%BB%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/162613.466902000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%95%84%EB%8D%94%EB%B2%A0%EB%A5%B4%EA%B0%80%EB%AA%BB%2002(hover).jpg',
      }
    ],
    네이키드와일드플라워: [
      {
        name: '[NEW] 네이키드 와일드 플라워 402',
        discount: '38,000원',
        price: '32,300원',
        volume: '30ml',
        solid: true,
        note: '부드러운 야생화',
        filterCode: 'floral',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/171023.639984000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%99%80%EC%9D%BC%EB%93%9C%ED%94%8C%EB%9D%BC%EC%9B%8C%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/171025.705934000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%99%80%EC%9D%BC%EB%93%9C%ED%94%8C%EB%9D%BC%EC%9B%8C%2002(hover).jpg',
      }
    ],
    네이키드머스크: [
      {
        name: '네이키드 머스크 103',
        discount: '38,000원',
        price: '32,300원',
        volume: '30ml',
        solid: true,
        note: '포근한 머스크',
        filterCode: 'animal',
        bestCode: true,
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/153744.575291000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%A8%B8%EC%8A%A4%ED%81%AC%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/153748.773410000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%A8%B8%EC%8A%A4%ED%81%AC%2002(hover).jpg',
      }
    ],
    네이키드뮤게: [
      {
        name: '네이키드 뮤게 313',
        discount: '38,000원',
        price: '32,300원',
        volume: '30ml',
        solid: true,
        note: '싱그러운 뮤게',
        filterCode: 'herbal',
        bestCode: true,
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/155204.113075000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%AE%A4%EA%B2%8C%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/155206.758473000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EB%AE%A4%EA%B2%8C%2002(hover).jpg',
      }
    ],
    네이키드샌달우드: [
      {
        name: '네이키드 샌달우드 201',
        discount: '38,000원',
        price: '32,300원',
        volume: '30ml',
        solid: true,
        note: '젖은 샌달우드',
        filterCode: 'woody',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/154925.127383000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%83%8C%EB%8B%AC%EC%9A%B0%EB%93%9C%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/154928.68772000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%83%8C%EB%8B%AC%EC%9A%B0%EB%93%9C%2002(hover).j.jpg',
      }
    ],
    네이키드튜베로즈: [
      {
        name: '네이키드 튜베로즈 420',
        discount: '38,000원',
        price: '32,300원',
        volume: '30ml',
        solid: true,
        note: '우아한 튜베로즈',
        filterCode: 'floral',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/160231.96850000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%9C%EB%B2%A0%EB%A1%9C%EC%A6%88%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/160233.198437000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%9C%EB%B2%A0%EB%A1%9C%EC%A6%88%2002(hover).jpg',
      }
    ],
    네이키드오크모스: [
      {
        name: '네이키드 오크 모스 501',
        discount: '38,000원',
        price: '32,300원',
        volume: '30ml',
        solid: true,
        note: '진초록 이끼',
        filterCode: 'mossy',
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/160535.557869000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%98%A4%ED%81%AC%EB%AA%A8%EC%8A%A4%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/160537.997919000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%98%A4%ED%81%AC%EB%AA%A8%EC%8A%A4%2002(hover).jpg',
      }
    ],
    솔리드퍼퓸트라이얼키트: [
      {
        name: '솔리드 퍼퓸 트라이얼 키트',
        discount: null,
        price: '2000원',
        volume: '2ml*4',
        solid: true,
        note: '솔리드 퍼퓸의 4가지 향',
        filterCode: null,
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/161128.965919000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%B8%EB%9D%BC%EC%9D%B4%EC%96%BC%ED%82%A4%ED%8A%B8%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/161132.837457000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%ED%8A%B8%EB%9D%BC%EC%9D%B4%EC%96%BC%ED%82%A4%ED%8A%B8%2002(hover).jpg',
      }
    ],
    시그니처쇼핑백: [
      {
        name: '시그니처 쇼핑백',
        discount: null,
        price: '3000원',
        volume: null,
        gift: true,
        note: '　',
        filterCode: null,
        url: 'https://shopby-images.cdn-nhncommerce.com/20240731/170620.56877000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%87%BC%ED%95%91%EB%B0%B1%2001.png',
        hoverUrl: 'https://shopby-images.cdn-nhncommerce.com/20240731/170623.424920000/%EC%97%90%EC%9D%B4%EB%94%95%ED%8A%B8_%EC%9E%90%EC%82%AC%EB%AA%B0_%EC%8D%B8%EB%84%A4%EC%9D%BC_1280x1280_%EC%87%BC%ED%95%91%EB%B0%B1%2002(hover).jpg',
      }
    ],
    제품없음: [
      {
        name: '',
        filterCode: '',
        url: '../../public/img/browser/Addict/noStock.JPG',
      }
    ],
  }
})

let fragrance = createSlice({
  name: "fragrance",
  initialState: {
    animal: [
      '01 Ambergris',
      '02 Castoreum', 
      '03 Musk', 
      '04 Civet cat oil', 
      '05 Hyracuem', 
      '06 Ambrette', 
      '07 Habanolide',
    ],
    woody: [
      '01 SandalWood', 
      '02 Bark', 
      '03 Cedarwood', 
      '04 Lichen', 
      '05 Guaiac wood', 
      '06 Patchouli', 
      '07 Hinoki',
      '08 Vetiver',
      '09 Oud',
    ],
    herbal: [
      '01 Flower stem', 
      '02 Ivy', 
      '03 Rosemary', 
      '04 Basil', 
      '05 Tea tree', 
      '06 Pepper mint', 
      '07 Camomile',
      '08 Lemongrass',
      '09 Verbena',
      '10 Eucalyptus',
      '11 Green tea',
      '12 Honeysuckle',
      '13 Muguet',
      '14 Green leaf',
      '15 Hyacinth',
      '16 Lemon balm',
      '17 Apple mint',
      '18 Pine',
      '19 Sage',
      '20 Darjeeling tea',
      '21 Earl grey tea',
      '22 Galbanum',
      '23 Peppermint',
      '24 Verbena',
      '25 Fig leaf',
      '26 Agave',
      '27 Bay essence',
      '28 Calamus',
      '29 Cilantro',
      '30 Vine',
      '31 Lavender',
    ],
    floral: [
      '01 Rose',
      '02 Wild flower',
      '03 Bitter orange flower',
      '04 Carnation',
      '05 Geranium',
      '06 Tulip',
      '07 Jasmin',
      '08 Jonquil',
      '09 Lilac',
      '10 Peach blossom',
      '11 Iris',
      '12 Ylang ylang',
      '13 Acacia',
      '14 Gardenia',
      '15 Violet',
      '16 Mimosa',
      '17 Magnolia',
      '18 Neroli',
      '19 Peony',
      '20 Tuberose',
      '21 White rose',
      '22 Saffron',
      '23 Cherry blossom',
      '24 Anemone',
      '25 Daisy',
      '26 Freesia',
      '27 Hydrangea',
      '28 Marigold',
      '29 Chrysanthemum',
      '30 Lily',
      '31 Pansy',
      '32 Lisianthus',
      '33 Camellia flower',
      '34 Lotus',
      '35 Myosotis',
      '36 Globe amaranth',
      '37 Black rose',
      '38 Cosmos',
      '39 Sunflower',
      '40 Statice',
    ],
    mossy: [
      '01 Oak Moss',
      '02 Tree Moss',
    ],
    citrus: [
      '01 Bergamot',
      '02 Lemon zest',
      '03 Grapefruit',
      '04 Lemon',
      '05 Lime',
      '06 Mandarine',
      '07 Orange',
      '08 Petitgrain',
      '09 Tangerin',
      '10 Yuju',
      '11 Pompia',
      '12 Calamansi',
      '13 Green tangerine',
      '14 Kumquat',
      '15 Limetta',
      '16 Pokan',
      '17 Clementine',
      '18 Blood orange',
      '19 Pomelo',
      '20 Isabella grape'
    ],
    fruity: [
      '01 Apple',
      '02 Cassis fruits',
      '03 Peach',
      '04 Blackberry',
      '05 Strawberry',
      '06 Coconut',
      '07 Cherry',
      '08 Banana',
      '09 Pineapple',
      '10 Blueberry',
      '11 Fig',
      '12 Pomegranate',
      '13 Grape',
      '14 Mango',
      '15 Pear',
      '16 Watermelon',
      '17 Raspberry',
      '18 Melon',
      '19 Green apple',
      '20 Apricot',
      '21 Kiwi',
      '22 Passion fruit',
      '23 Papaya',
      '24 Tomato',
      '25 Plum',
      '26 Japanese apricot',
      '27 Black currant',
      '28 Acai berry',
      '29 Black cherry',
      '30 Mirabelle',
      '31 Yumberry'
    ],
    powdery: [
      '01 Aldehydal',
      '02 Vanilla',
      '03 Myrr',
      '04 Benzoin',
      '05 Opoponax',
      '06 Marine',
      '07 Cascalone',
    ],
    special: [
      '01 Clove',
      '02 Cinnamon',
      '03 Leather',
      '04 Tonka nut',
      '05 Tabacco',
      '06 Black pepper',
      '07 Honey',
      '08 Fennel',
      '09 Ginger',
      '10 Pink pepper',
      '11 Turmeric',
      '12 Cinnamaldehyde',
      '13 Cacao pod',
      '14 Cassia'
    ],
  }
});

let cardData = createSlice({
  name: "cardData",
  initialState: {
    애니멀노트: [
      {
        filterCode: 'animal',
        noteTitle: '1 Animal Note',
        description: '동물의 향에서 유래한 묵직한 향조로, 다른 향조와 밸런스를 맞추면 고급스러우면서도 관능적인 느낌을 자아냅니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115418.671628000/note_01.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-01.png',
      }
    ],
    우디노트: [
      {
        filterCode: 'woody',
        noteTitle: '2 Woody Note',
        description: '나무나 목재에서 나는 담백한 향조로, 무게감 있게 향의 중심을 잡아주어 차분하고 고급스러운 향을 연출합니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115430.663902000/note_02.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-02.png',
      }
    ],
    그린노트: [
      {
        filterCode: 'herbal',
        noteTitle: '3 Herbal & Green Note',
        description: '라벤더 등 허브 향이나 풀잎을 비볐을 때 나는 신선한 향조로, 프레시한 이미지를 표현하며 자연의 푸릇한 향을 느낄 수 있습니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115440.399780000/note_03.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-03.png',
      }
    ],
    플로럴노트: [
      {
        filterCode: 'floral',
        noteTitle: '4 Floral Note',
        description: '꽃에서 나는 향긋한 향조로, 꽃에 따라 우아하고 클래식하거나 관능적인 향으로 연출되어 향을 표현할 때 가장 중요한 노트 중 하나입니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115450.391334000/note_04.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-04.png',
      }
    ],
    모씨노트: [
      {
        filterCode: 'mossy',
        noteTitle: '5 Mossy Note',
        description: '우거진 숲속의 촉촉하게 젖은 이끼 향조로, 프레시한 그린이 아닌 다운된 그린을 연상시킵니다. 가볍게 표현되는 노트의 향을 차분하게 만들어주어 그윽한 분위기를 연출합니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115459.659484000/note_05.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-05.png',
      }
    ],
    시트러스노트: [
      {
        filterCode: 'citrus',
        noteTitle: '6 Citrus Note',
        description: '감귤 계열의 상큼한 향조로, 향수의 첫인상을 표현하는 데 주로 사용되는 향입니다. 다운된 기분을 리프레시 시켜주며, 다크해질 수 있는 향을 기분 좋게 끌어올려 줍니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115508.267742000/note_06.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-06.png',
      }
    ],
    프루티노트: [
      {
        filterCode: 'Fruity',
        noteTitle: '7 Fruity Note',
        description: '감귤 계열의 향을 제외한 모든 달콤한 과일 향조로, 통통 튀는 이미지를 표현하거나 향에 변주를 주기 위해 사용합니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115518.61346000/note_07.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-07.png',
      }
    ],
    파우더리노트: [
      {
        filterCode: 'powdery',
        noteTitle: '8 Watery & Powdery Note',
        description: '물이나 바다, 파우더 가루의 부드러운 향조로, 사용되는 향료에 따라 투명하거나 묵직한 느낌을 표현합니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115528.995515000/note_08.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-08.png',
      }
    ],
    스페셜노트: [
      {
        filterCode: 'special',
        noteTitle: '9 Special Note',
        description: '향에 포인트를 줄 수 있는 향조로, 꿀, 진저처럼 개성을 유지하면서도 조화를 이루어내는 향기나 향신료의 스파이시한 향기 등 유니크한 향을 연출합니다.',
        img: 'https://shopby-images.cdn-nhncommerce.com/20240717/115537.903230000/note_09.jpg',
        modalImg: 'https://media.11corporation.com/cdn/addict/shopby/fragrance/modal/20240717/note-pc-09.png',
      }
    ],
  }
})


export default configureStore({
  reducer: {
    productData: productData.reducer,
    cardData: cardData.reducer,
    fragrance: fragrance.reducer,
  }
});