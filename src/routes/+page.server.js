

export const actions = {
  comsubmit: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name")
    const email = formData.get('email');
    const comment = formData.get('comment')
    const R = "https://atstest.xyz/addcom/"
    const L = name + "/" + email + "/" + comment
    const U = R + L
    const URL = encodeURI(U)

    let resp = await request(URL)

    if (resp === "Comment inserted into db") {
      return { success: true };
    } else {
      return { success: false };
    }
  },

  estisubmit: async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get('name');
    const address = formData.get('address');
    const city = formData.get('city');
    const phone = formData.get('phone');
    const email = formData.get('email');
    const comment = formData.get('comment');
    const U2 = "https://atstest.xyz/addesti/"
    const R2 = name + "/" + address + "/" + city + "/" + phone + "/" + email + "/" + comment
    const L2 = U2 + R2
    const URL2 = encodeURI(L2)

    let estiresp = await request(URL2)

    if (estiresp === "Comment inserted into db") {
      return { success: true };
    } else {
      return { success: false };
    }
  },
};