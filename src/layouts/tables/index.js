import styles from './index.module.scss'
import React, { useState } from 'react';

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Material Dashboard 2 React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Tables/DataTable";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";
import MDSnackbar from "components/MDSnackbar";

import MDButton from "components/MDButton";

import SelectTextFields from 'components/selects/index'
import SimpleInput from 'components/inputs/index'

import api from '../../api/course'; // Substitua 'path-para-o-arquivo' pelo caminho real para o arquivo api.js
import AddCourseForm from 'components/forms/courseFom';


function Tables() {
  const [formData, setFormData] = useState({
    topico: '',
    level: '',
    titulo: '',
    descricao: '',
    imageUrl: '',
  });


  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();

  const handleTopicChange = (field, value) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [field]: value,
    }));
  };


  const handleFormSubmit = async (event) => {
    event.preventDefault();

    const teste = {
      title: formData.titulo,
      description: formData.descricao,
      image_url: formData.imageUrl,
      topic_id: formData.topico,
      level_id: formData.level,
    };

    console.log('====================================');
    console.log(teste);
    console.log('====================================');

    try {
      const addedCourse = await api.addCourse({
        title: formData.titulo,
        description: formData.descricao,
        image_url: formData.imageUrl,
        topic_id: formData.topico,
        level_id: formData.level,
      });

      console.log('Curso adicionado:', addedCourse);
      openSuccessSB();
    } catch (error) {
      console.error('Erro ao adicionar o curso:', error.message);
      openErrorSB();
    }
  };

  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);

  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);
  const openInfoSB = () => setInfoSB(true);
  const closeInfoSB = () => setInfoSB(false);
  const openWarningSB = () => setWarningSB(true);
  const closeWarningSB = () => setWarningSB(false);
  const openErrorSB = () => setErrorSB(true);
  const closeErrorSB = () => setErrorSB(false);


  const renderSuccessSB = (
    <MDSnackbar
      color="success"
      icon="check"
      title="Curso Adicionado"
      content="O curso X foi adicionado a base."
      dateTime="Adicionado agora"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}
      bgWhite
    />
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Adicionar Cursos
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <AddCourseForm />
              </MDBox>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
              >
                <MDTypography variant="h6" color="white">
                  Cursos  adicionados
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: pColumns, rows: pRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>
      </MDBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
