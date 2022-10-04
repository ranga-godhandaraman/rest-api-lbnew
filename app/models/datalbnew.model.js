module.exports = (sequelize, Sequelize) => {
  const Datalbnew = sequelize.define("lbnew", {
    studyid: {
      type: Sequelize.STRING
    },
    usubjid: {
      type: Sequelize.STRING
    },
    lbtest: {
      type: Sequelize.STRING
    },
    lbcat: {
      type: Sequelize.STRING
    },
    lbscat: {
      type: Sequelize.STRING
    },
    lborres: {
      type: Sequelize.STRING
    },
    lborresu: {
      type: Sequelize.STRING
    },
    lbstresn: {
      type: Sequelize.STRING
    },
    lbstresu: {
      type: Sequelize.STRING
    },
    visitnum: {
      type: Sequelize.STRING
    },
    visit: {
      type: Sequelize.STRING
    },
    visitdy: {
      type: Sequelize.STRING
    },
    lbdtc: {
      type: Sequelize.STRING
    },
    lbdy: {
      type: Sequelize.STRING
    }
  });

  return Datalbnew;
};
 