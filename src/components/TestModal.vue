<template lang="pug">
.ui.modal
      i.close.icon
      .header
        | Profile Picture
      .image.content
        .ui.medium.image
          img(src='/images/avatar/large/chris.jpg')
        .description
          .ui.header We've auto-chosen a profile image for you.
          p
            | We've grabbed the following image from the 
            a(href='https://www.gravatar.com', target='_blank') gravatar
            |  image associated with your registered e-mail address.
          p Is it okay to use this photo?
      .actions
        .ui.black.deny.button
          | Nope
        .ui.positive.right.labeled.icon.button
          | Yep, that's me
          i.checkmark.icon
</template>

<script>
export default {
  name: 'app'
}
</script>