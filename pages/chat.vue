<template>
  <div class="c-wrap">
    <div class="c-chat">
      <Message
        v-for="message in messages"
        :key="message.text"
        :name="message.name"
        :text="message.text"
        :owner="true"
      />
    </div>
    <div class="c-form"></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Message from "@/components/Message";

export default {
  middleware: ["chat"],
  computed: mapState(["user", "messages"]),
  components: { Message },
  head() {
    return {
      title: `Room #${this.user.room}`
    };
  }
};
</script>

<style scoped>
.c-wrap {
  height: 100%;
  position: relative;
  overflow: hidden;
}

.c-form {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 1rem;
  height: 80px;
  background: #212121;
}

.c-chat {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 80px;
  padding: 1rem;
  overflow-y: auto;
}
</style>
