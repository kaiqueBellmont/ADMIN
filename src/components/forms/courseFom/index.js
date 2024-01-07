import MDButton from 'components/MDButton';
import React, { useState } from 'react'
import styles from './index.module.scss'
import { FormControl, InputLabel, MenuItem, OutlinedInput, TextField } from '@mui/material';
import { addCourse } from 'api/course';
import MDSnackbar from 'components/MDSnackbar';


const AddCourseForm = () => {

  const [context, setContext] = useState({});
  const [topic, setTopic] = useState('')
  const [level, setLevel] = useState('')
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  // errors
  const [topicError, setTopicError] = useState(false)
  const [levelError, setLevelError] = useState(false)
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [imageUrlError, setImageUrlError] = useState(false)

  const currencies = [
    {
      value: 1,
      label: 'Base',
    },
    {
      value: 2,
      label: 'iniciante',
    }
  ];

  const [successSB, setSuccessSB] = useState(false);
  const [infoSB, setInfoSB] = useState(false);
  const [warningSB, setWarningSB] = useState(false);
  const [errorSB, setErrorSB] = useState(false);
  const openSuccessSB = () => setSuccessSB(true);
  const closeSuccessSB = () => setSuccessSB(false);


  const renderSuccessSB = () => (

    <MDSnackbar
      color="info"
      icon="check"
      title={"Curso adicionado com sucesso!"}
      content={`
      success: ${context.success},
      "id": ${context.id},
      "title": ${context.title},
      "description": ${context.description}
        `}
      dateTime="1s ago"
      open={successSB}
      onClose={closeSuccessSB}
      close={closeSuccessSB}

    />
  );


  const handleFormSubmit = async (event) => {
    event.preventDefault();
    if (topic === "") {
      setTopicError(true)
    }

    if (level === "") {
      setTopicError(true)
    }

    if (title === "") {
      setTitleError(true)
    }
    if (description === "") {
      setDescriptionError(true)
    }
    if (imageUrl === "") {
      setImageUrlError(true)
    }

    const course = {
      topic_id: topic,
      level_id: level,
      title: title,
      description: description,
      image_url: imageUrl
    };


    try {
      const addedCourse = await addCourse({ ...course });

      // Limpa os campos do formulário resetando os estados
      setTopic('');
      setLevel('');
      setTitle('');
      setDescription('');
      setImageUrl('');

      // Também reseta os estados de erro
      setTopicError(false);
      setLevelError(false);
      setTitleError(false);
      setDescriptionError(false);
      setImageUrlError(false);

      console.log('Curso adicionado:', addedCourse);
      setContext({ ...addedCourse })

      openSuccessSB()
    } catch (error) {
      console.error('Erro ao adicionar o curso:', error.message);
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.add_courses_wrapper}>
          <div className={styles.courses}>
            <TextField
              id={`standard-select-currency-topic`}
              select
              label={"Topic"}
              value={topic}
              helperText={`Select the Topic`}
              variant="standard"
              required
              size='small'
              error={topicError}
              onChange={e => setTopic(e.target.value)}
              sx={{ width: '100%' }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              id={`standard-select-currency-level`}
              select
              label={"Level"}
              value={level}
              helperText={`Select the Level`}
              variant="standard"
              required
              size='small'
              error={levelError}
              onChange={e => setLevel(e.target.value)}
              sx={{ width: '100%' }}
            >
              {currencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel htmlFor="outlened-input-title">Course Title</InputLabel>
              <OutlinedInput
                id="outlened-input-title"
                value={title}
                label="Course Title"
                size='small'
                onChange={e => setTitle(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel htmlFor="outlened-input-description" >Course Description</InputLabel>
              <OutlinedInput
                id="outlened-input-description"
                value={description}
                label="Course description"
                size='small'
                required
                onChange={e => setDescription(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel htmlFor="outlened-input-imageurl">Image URL</InputLabel>
              <OutlinedInput
                id="outlened-input-imageurl"
                value={imageUrl}
                label="Image URL"
                size='small'
                required
                onChange={e => setImageUrl(e.target.value)}

              />
            </FormControl>
            {renderSuccessSB({ ...context })}
          </div>
          <MDButton
            type="submit"
            variant="gradient"
            color="success"
            className={styles.button}
          >
            Adicionar Curso
          </MDButton>
        </div>
      </form>
    </>
  )
}

export default AddCourseForm