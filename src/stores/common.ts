import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useCommonStore = defineStore('common', () => {
  const menuItems = ref([
    {
      label: '青蛙x哈魯-簡介',
      hash: 'about',
      content: `<p>哈囉！</p>
<p>我們是獨立樂團「隕方」下的兩個成員</p>
<p>青蛙 和 哈魯</p>
<p>青蛙是主唱，兼彈節奏吉他</p>
<p>哈魯是貝斯手</p>
<p>我們風格以抒情、民謠為主</p>
<p>其中隕方樂團中，創作作品主要來自青蛙</p>
<p>因此先以青蛙為主初試啼聲</p>
<p>與大家分享三首比較青澀的自創曲目</p>
<p>也分享一些朗朗上口的華文經典曲目翻唱</p>
<p>希望大家會喜歡！</p>`,
    },
    {
      label: '相關連結-IG粉專',
      hash: 'link',
      content: `
<p><span style="text-decoration: underline;"><a target="_blank" href="https://www.instagram.com/hemaynotbeafrog/?igsh=MXVzdXhiNng0c3c0eg%3D%3D">他可能不是青蛙</a></span></p>
<p><span style="text-decoration: underline;"><a target="_blank" href="https://www.instagram.com/bass._.haru?igsh=cGgzb3FmbGtnaDZk">哈魯</a></span></p>
<p><span style="text-decoration: underline;"><a target="_blank" href="https://www.instagram.com/meteoritesquare?igsh=Y2JhNWJkM2UxdDY=">隕方</a></span></p>`,
    },
    {
      label: '節目表',
      hash: 'map',
      content: `<ol>
<li><span style="font-weight: 400;">1. 我想這樣對你說(青蛙自創)</span></li>
<li><span style="font-weight: 400;">2. 離開(原唱:郭靜)</span></li>
<li><span style="font-weight: 400;">3. 當我們一起走過(原唱:蘇打綠)</span></li>
<li><span style="font-weight: 400;">4. 小手拉大手(原唱:梁靜茹)</span></li>
<li><span style="font-weight: 400;">5. 情人節出沒(青蛙自創)</span></li>
<li><span style="font-weight: 400;">6. 董小姐(原唱:宋東野)</span></li>
<li><span style="font-weight: 400;">7. 四季(原唱:A-lin)</span></li>
<li><span style="font-weight: 400;">8. Knock(青蛙自創)</span></li>
<li><span style="font-weight: 400;">9. 存在的力量(原唱:朱俐靜)</span></li>
</ol>`,
    },
    {
      label: '我想這樣對你說',
      hash: 'song01',
      content: `<p><span>過去擁有的寂寞</span></p>
<p><span>現在我想跟你說</span></p>
<p>&nbsp;</p>
<p><span>回憶斑斑駁駁</span></p>
<p><span>在我的人生只剩下幾句能打發過</span></p>
<p><span>懷疑的眼神中</span></p>
<p><span>曾經相信的劇情就像曇花一朵</span></p>
<p><span>你說你不相信一個沉默的我</span></p>
<p><span>不好意思我一個學期一句話也沒說過</span></p>
<p><span>那個時候總是希望有人把我看透</span></p>
<p><span>想當然爾當然是沒有</span></p>
<p>&nbsp;</p>
<p><span>所以我要你這樣聽我說</span></p>
<p><span>所以我要你這樣聽我說</span></p>
<p>&nbsp;</p>
<p><span>時光匆匆走過</span></p>
<p><span>有時候依然懷疑自己是否有成就</span></p>
<p><span>然而輕輕回頭</span></p>
<p><span>身旁的陌生人都漸漸變成朋友</span></p>
<p><span>這短暫的人生到底能擁有什麼</span></p>
<p><span>或許就是此時此刻你聆聽我的眼眸</span></p>
<p>&nbsp;</p>
<p><span>所以我要你這樣聽我說</span></p>
<p><span>所以我要你這樣聽我說</span></p>
<p>&nbsp;</p>
<p><span>過去擁有的寂寞</span></p>
<p><span>現在希望你會懂</span></p>`,
    },
    {
      label: '情人節出沒',
      hash: 'song02',
      content: `
<p><span>情人節出沒 你的笑容怎麼這麼彆扭？</span></p>
<p><span>是需要一隻狗 還是渴望著手指手心觸碰？</span></p>
<p><span>別這麼難過 你要的幸福其實不是很多</span></p>
<p><span>灼熱的胸口 微甜的美夢 都在你我心中閃爍</span></p>
<p>&nbsp;</p>
<p><span>我們 都渴望著邂逅</span></p>
<p><span>都希望在下一個巷口 撞到老公老婆</span></p>
<p><span>只是 通常是撞到老公公婆婆</span></p>
<p><span>那也只能笑笑說 祝你們天長地久</span></p>
<p>&nbsp;</p>
<p><span>情人節出沒 放閃的朋友總讓人發火</span></p>
<p><span>卻不能說什麼 手指動動讓動態快滑過</span></p>
<p>&nbsp;</p>
<p><span>乾脆 就唱一首歌</span></p>
<p><span>讓心中的苦痛 都化為享受</span></p>
<p><span>如果 唱一首歌也不能夠解脫</span></p>
<p><span>不如就聽聽我說的 一起看破</span></p>
<p><span>腦子的洞</span></p>`,
    },
    {
      label: 'Knock',
      hash: 'song03',
      content: `
<p><span>窗邊的自由</span></p>
<p><span>是一座牢籠</span></p>
<p><span>擁抱著凌遲我的枷鎖</span></p>
<p>&nbsp;</p>
<p><span>鼠灰色天空</span></p>
<p><span>任烏雲遊走</span></p>
<p><span>所有束縛都太放縱</span></p>
<p>&nbsp;</p>
<p><span>待大風走過</span></p>
<p><span>颳起一場夢</span></p>
<p><span>讓你說的話 全都化為莫須有</span></p>
<p>&nbsp;</p>
<p><span>夢魘 夢魘 夢掩埋了真偽</span></p>
<p><span>一切 解答 只能 自己摸索</span></p>
<p>&nbsp;</p>
<p><span>沒有人能定義我</span></p>
<p><span>沒有人能看見我</span></p>
<p><span>房間裡時光的躁動 仍沉默</span></p>
<p><span>如今一切都成空</span></p>
<p><span>依然在心中守候</span></p>
<p><span>我害怕 敲了門以後</span></p>
<p><span>你不會在那裡 等</span></p>
<p>&nbsp;</p>
<p><span>玻璃般脆弱</span></p>
<p><span>荊棘般刺痛</span></p>
<p><span>脹滿的回憶如此羸弱</span></p>
<p>&nbsp;</p>
<p><span>混亂的雙眸</span></p>
<p><span>始終看不透</span></p>
<p><span>歡笑的背後 竟藏著鋒利匕首</span></p>
<p>&nbsp;</p>
<p><span>夢魘 夢魘 夢掩埋了真偽</span></p>
<p><span>一切 解答 只能 自己摸索</span></p>
<p>&nbsp;</p>
<p><span>沒有人能定義我</span></p>
<p><span>沒有人能看見我</span></p>
<p><span>房間裡時光的躁動 仍沉默</span></p>
<p><span>如今一切都成空</span></p>
<p><span>依然在心中守候</span></p>
<p><span>我害怕 敲了門以後</span></p>
<p><span>你不會在那裡</span></p>
<p>&nbsp;</p>
<p><span>knock knock knock knock</span></p>
<p><span>需要一點勇氣</span></p>
<p><span>還要一點契機</span></p>
<p><span>卻總是徒然</span></p>
<p>&nbsp;</p>
<p><span>沒有人能定義我</span></p>
<p><span>沒有人能看見我</span></p>
<p><span>這瘋狂 苦澀的蒴果 我嘗透</span></p>
<p><span>岔開你我阡與陌</span></p>
<p><span>展開全新的生活</span></p>
<p><span>我知道 敲了門以後</span></p>
<p><span>你不會在那裡</span></p>
<p><span>等我</span></p>`,
    },
  ])

  return { menuItems }
})
