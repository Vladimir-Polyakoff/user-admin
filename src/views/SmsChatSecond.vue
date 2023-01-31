<script>
import InputChat from '@/components/InputChat.vue'
import { mapActions } from 'vuex'

export default {
  name: 'SmsChatSecond',
  components: {
    InputChat
  },
  computed: {
    chatList () {
      return this.$store.getters.getChatList
      // return this.$store.state.chatList
    }
  },
  methods: {
    ...mapActions(['addMessage']),
    send (value) {
      this.addMessage({ name: 'second', value })
      this.$router.push('/sms-chat')
    }
  }
}
</script>

<template>
  <div class="parent">
    <div class="chat">
      <div
        v-for="(sms, index) in chatList"
        :key="index"
        :style="sms.name === 'second' && 'text-align: right'"
      >{{ sms.name }} : {{ sms.value }}
      </div>
    </div>
    <InputChat @send="send"/>
  </div>
</template>

<style scoped>
  .parent {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .chat {
    color:red;
    width: 100%;
    background: #262626;
    flex: 1 1 auto;
  }
</style>
