const db = require('../../dataBase/models');
const User = db.Usuario;
module.exports = {
  list: async (req, res) => {
    let response = { data: {} };
    try {
      const allUsers = await User.findAll();

      response.data.count = allUsers.length;
      response.data.users = allUsers.map((row) => {
        return {
          id: row.id,
          name: row.nombre,
          email: row.email,
          image: row.image,
          detail: `/api/users/${row.id}`,
        };
      });
      return res.json(response);
    } catch (error) {
      response.msg = 'Hubo un error en consulta de ususarios';
      return res.json(response);
    }
  },
  detail: async (req, res) => {
    const response = {};
    try {
      const oneUser = await User.findByPk(req.params.id, {
        attributes: {
          exclude: [
            'password',
            'id',
            'tipo_identificacion',
            'numero_identificacion',
          ],
        },
      });
      response.user = oneUser;
      response.img = `/public/img/imgUsers/${oneUser.image}`;
      return res.json(response);
    } catch (error) {
      response.msg = 'Hubo un error en consulta del ususario';
      return res.json(response);
    }
  },
};
