<template>
  <div class="contact">
    <baidu-map
      class="map"
      :center="{lng: location.longitude, lat: location.latitude}"
      :zoom="17"
    >
      <bm-marker
        :position="{lng: location.longitude, lat: location.latitude}"
        :dragging="true"
        animation="BMAP_ANIMATION_BOUNCE"
      />
    </baidu-map>
    <app-select
      :list="selectList"
      @change="handleChange"
    />
    <contact-address :list="detailData"/>
  </div>
</template>

<script>
  import ContactAddress from '@/components/shared/ContactAddress'

  export default {
    name: 'Contact',
    components: {
      ContactAddress
    },
    methods: {
      handleChange (id) {
        this.location = this.mapData[id]
      }
    },
    data () {
      return {
        selectList: [{
          'id': 'xiamen',
          'text': '厦门'
        }, {
          'id': 'wuhan',
          'text': '武汉'
        }, {
          'id': 'Netherlands',
          'text': '荷兰'
        }, {
          'id': 'Singapore',
          'text': '新加坡'
        }],
        mapData: {
          'xiamen': {
            'longitude': '118.056716',
            'latitude': '24.611912'
          },
          'wuhan': {
            'longitude': '114.404498',
            'latitude': '30.511795'
          },
          'Netherlands': {
            'longitude': '4.950689',
            'latitude': '52.505427'
          },
          'Singapore': {
            'longitude': '103.847261',
            'latitude': '1.280127'
          }
        },
        location: {
          'longitude': '118.056716',
          'latitude': '24.611912'
        },
        detailData: [{
          'imgUrl': 'http://www.kooboo.org/images/China.jpg',
          'phone': '0592-5550586',
          'address': '厦门市集美软件园三期A03栋1401-1402',
          'email': 'hr@kooboo.com'
        }, {
          'imgUrl': 'http://www.kooboo.org/images/China.jpg',
          'phone': '0592-5550586',
          'address': '武汉市光谷现代世贸中心I栋1103',
          'email': ''
        }, {
          'imgUrl': 'http://www.kooboo.org/images/rb2-Netherlands.jpg',
          'phone': '+31(0)299 200 800',
          'address': 'Wilhelminalaan 1-C 1441 EK Purmerend',
          'email': ''
        }, {
          'imgUrl': 'http://www.kooboo.org/images/rb2-Singapore.jpg',
          'phone': '+65(0)900 10 554',
          'address': 'Telok Ayer Street #198068637 Singapore',
          'email': ''
        }]
      }
    }
  }
</script>
