/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Material Dashboard 2 React - v2.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import Disciplinas from "..";

export default function data() {
  const Disciplina = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Funcao = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );

  return {
    columns: [
      { Header: "Professor", accessor: "professor", width: "45%", align: "left" },
      { Header: "disciplinas", accessor: "funcao", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
    ],

    rows: [
      {
        professor: <Disciplina image={team2} name="Demétrio" email="demetrio.mestre@ccc.ufcg.br" />,
        funcao: <Funcao title="Programação para Web II" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="selecionado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        professor: <Disciplina image={team3} name="Carlos Eduardo" email="carlos.edu@ccc.edu.br" />,
        funcao: <Funcao title="Programação em Banco de Dados" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="selecionado" color="success" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
      {
        professor: <Disciplina image={team4} name="Dalton" email="dalton@ccc.ufcg.edu.br" />,
        funcao: <Funcao title="ATAL" description="UFCG" />,
        status: (
          <MDBox ml={-1}>
            <MDBadge badgeContent="em análise" color="dark" variant="gradient" size="sm" />
          </MDBox>
        ),
      },
    ],
  };
}
