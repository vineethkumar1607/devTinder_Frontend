import { Formik, Form, Field, ErrorMessage } from 'formik';
import { profilevalidation } from '../utils/profileValidation';
import TextInput from './formFields/TextInput';
import TextArea from './formFields/TextArea';
import GenderSelect from './formFields/GenderSelect';
import SkillsInput from './formFields/SkillsInput';
import FeedUserCard from './FeedUserCard';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserProfile } from '../utils/redux/userSlice';
import toast from 'react-hot-toast';

const UpdateProfileForm = ({ userDetails }) => {
  const dispatch = useDispatch();
  const { updateProfileLoading } = useSelector((state) => state.user);

  const { firstName, lastName, age, gender, photoUrl, about, skills } = userDetails;
  const initialValues = {
    firstName: firstName ?? '',
    lastName: lastName ?? "",
    age: age ?? "",
    gender: gender ?? "",
    photoUrl: photoUrl ?? "",
    about: about ?? "",
    skills: skills ?? "",
  };


  const handleSubmit = async (values, { setSubmitting }) => {
    const resultAction = await dispatch(updateUserProfile(values));

    if (updateUserProfile.fulfilled.match(resultAction)) {
      toast.success('Profile updated successfully');
    } else if (updateUserProfile.rejected.match(resultAction)) {
      toast.error(resultAction.payload || 'Update failed');
    }
    setSubmitting(false);
  };

  return (
   <Formik
  initialValues={initialValues}
  validationSchema={profilevalidation}
  onSubmit={handleSubmit}
  validateOnChange={false}
  validateOnBlur={true}
>
  {({ values, setFieldValue, isSubmitting }) => (
    <div className=' p-8'>
      <div className='flex flex-wrap justify-center gap-8'>
        {/* Form Card - Now with explicit card styling */}
        <div className='card bg-base-100 shadow-xl flex-1 min-w-[300px] max-w-xl'>
          <div className='card-body'>
            <Form className='w-full'>
              <Field as={TextInput} label='First Name' id="firstName-input" name='firstName' type='text' />
              <ErrorMessage name='firstName' component='div' className='text-red-500 text-sm' />

              <Field as={TextInput} label='Last Name' id="lastName-input" name='lastName' type='text' />
              <ErrorMessage name='lastName' component='div' className='text-red-500 text-sm' />

              <Field as={TextInput} type='number' id="age-input" name='age' label='Age' />
              <ErrorMessage name='age' component='div' className='text-red-500 text-sm' />

              <Field as={GenderSelect} name='gender' />
              <ErrorMessage name='gender' component='div' className='text-red-500 text-sm' />

              <Field as={TextInput} type='url' id="photoUrl-input" name='photoUrl' label='Photo URL' />
              <ErrorMessage name='photoUrl' component='div' className='text-red-500 text-sm' />

              <SkillsInput
                skills={values.skills}
                id="skills-input"
                setSkills={(skills) => setFieldValue('skills', skills)}
                maxSkills={10}
              />
              <ErrorMessage name='skills' component='div' className='text-red-500 text-sm' />

              <Field as={TextArea} label='About' name='about' id="about-textarea" />
              <ErrorMessage name='about' component='div' className='text-red-500 text-sm' />

              <button
                type='submit'
                disabled={isSubmitting || updateProfileLoading}
                className='btn btn-primary w-full mt-4'
              >
                {updateProfileLoading ? 'Updating...' : 'Update Profile'}
              </button>
            </Form>
          </div>
        </div>

        {/* User Card - Now with explicit card styling */}
        <div className='card bg-base-100 shadow-xl flex-1 min-w-[300px] max-w-md'>
          <div className='card-body'>
            <FeedUserCard user={values} />
          </div>
        </div>
      </div>
    </div>
  )}
</Formik>
  );
};

export default UpdateProfileForm;