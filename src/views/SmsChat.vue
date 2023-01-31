<template>
  <div class="parent">
    <div class="chat">
      <div
        v-for="(sms, index) in chatList"
        :key="index"
        :style="sms.name === 'second' && 'text-align: right'"
      >
      {{ sms.name }} : {{ sms.value }}
      </div>
    </div>
    <InputChat @send="send"/>
  </div>
</template>

<script>
import InputChat from '@/components/InputChat.vue'
import { mapActions } from 'vuex'

export default {
  name: 'SmsChat',
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
      this.addMessage({ name: 'first', value })
      this.$router.push('/sms-chat-second')
    }
  }
}
</script>

<style scoped>
  .parent {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }
  .chat {
    color: white;
    width: 100%;
    background: #262626;
    flex: 1 1 auto;
  }
</style>
