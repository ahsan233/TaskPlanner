import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React, {useState, useRef} from 'react';
import styles from './styles';
import CustomButton from '../../components/CustomButton';
import CustomButtonOne from '../../components/CustomButtonOne';
import CustomHeader from '../../components/CustomHeader';
import CustomTextInput from '../../components/CustomInput';
import {appColor} from '../../utils/colors/colors';
import RBSheet from 'react-native-raw-bottom-sheet';
import DatePicker from 'react-native-date-picker';
import Dropdown from '../../assets/images/Dropdown.svg';

export default function Dashboard() {
  const refRBSheet = useRef();
  const [tasks, setTasks] = useState([]);
  const [taskHeading, setTaskHeading] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const addTask = () => {
    if (taskHeading?.trim() !== '') {
      if (selectedTask) {
        const updatedTasks = tasks.map(task =>
          task.id === selectedTask.id
            ? {...task, title: taskHeading, details: taskDetail}
            : task,
        );
        setTasks(updatedTasks);
        setSelectedTask(null);
      } else {
        const task = {
          id: Math.random().toString(),
          title: taskHeading,
          details: taskDetail,
        };
        setTasks([...tasks, task]);
      }
      setTaskHeading('');
      setTaskDetail('');
      refRBSheet.current.close();
    }
  };
  const editTask = task => {
    setSelectedTask(task);
    setTaskHeading(task?.title);
    setTaskDetail(task?.details);
    refRBSheet.current.open();
  };
  return (
    <View style={styles.Container}>
      <DatePicker
        modal
        open={open}
        date={date}
        mode="datetime"
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      <RBSheet
        ref={refRBSheet}
        closeOnDragDown={true}
        closeOnPressMask={false}
        height={600}
        customStyles={{
          container: {
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
          },
          wrapper: {
            backgroundColor: '#00000080',
          },
          draggableIcon: {
            backgroundColor: appColor.white,
          },
        }}>
        <View style={styles.headingContainer}>
          <Text style={styles.textStyle}>
            {selectedTask ? 'Edit Task' : 'Add Task'}
          </Text>
        </View>
        <View style={styles.ItemContainer}>
          <Text style={styles.textStyle1}>Task Heading</Text>
          <CustomTextInput
            placeholder={'Lorem Ipsum'}
            TextInput={styles.TextInput}
            style={styles.TextinputStyle}
            value={taskHeading}
            onChangeText={text => setTaskHeading(text)}
          />
        </View>
        <View style={styles.ItemContainer}>
          <Text style={styles.textStyle1}>Task Detail</Text>
          <CustomTextInput
            placeholder={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris sit.'
            }
            TextInput={styles.TextInput1}
            value={taskDetail}
            onChangeText={text => setTaskDetail(text)}
            multiline={true}
          />
        </View>
        <View style={styles.ItemContainer}>
          <Text style={styles.textStyle1}>Due Date</Text>
          <TouchableOpacity
            style={styles.InputView}
            onPress={() => setOpen(true)}>
            <Text style={styles.textStyle4}>10:00 AM |12/2/23</Text>
            <Dropdown />
          </TouchableOpacity>
        </View>
        <CustomButtonOne
          title={selectedTask ? 'Update Task' : 'Save Changes'}
          style={styles.button1}
          textStyle={styles.textStyle2}
          customClick={() => addTask()}
        />
        <CustomButtonOne
          title={'Cancel'}
          style={styles.button2}
          textStyle={styles.textStyle3}
          customClick={() => {
            setSelectedTask(null);
            refRBSheet.current.close();
          }}
        />
      </RBSheet>
      <View style={styles.headerContainer}>
        <CustomHeader />
        <View style={styles.searchBar}>
          <Image
            source={require('../../assets/images/Search.png')}
            style={styles.image}
            resizeMode="cover"
          />
          <TextInput
            placeholder="Serach Stored Tasks"
            placeholderTextColor={appColor.black}
            style={styles.input}
          />
        </View>
      </View>
      {tasks?.map((task, index) => (
        <TouchableOpacity
          key={task.id}
          style={[
            styles.taskContainer,
            selectedTask === task && styles.selectedTaskContainer,
          ]}
          onPress={() => setSelectedTask(task)}
          onLongPress={() => editTask(task)}>
          <View style={styles.detailContainer}>
            <Text style={styles.textStyle5}>{task.title}</Text>
            <Text>Due Date 10:00 AM | 12/2/23</Text>
          </View>
          <View style={styles.divider}></View>
          <Text style={styles.textStyle6}>{task.details}</Text>
          {selectedTask === task ? (
            <Image
              source={require('../../assets/images/BlueSelected.png')}
              style={styles.circle}
              resizeMode="cover"
            />
          ) : (
            <View style={styles.circleView}></View>
          )}
        </TouchableOpacity>
      ))}
      <CustomButton
        title={'Add New Task'}
        customClick={() => refRBSheet.current.open()}
        style={styles.button}
      />
      {selectedTask && (
        <View style={styles.optionsContainer}>
          <TouchableOpacity onPress={() => setSelectedTask(null)}>
            <Image
              source={require('../../assets/images/ShowSelect.png')}
              style={styles.image1}
              resizeMode="cover"
            />
          </TouchableOpacity>
          <Text style={styles.optionButtonText}>1 Seclected</Text>
          <Text style={styles.optionButtonText}>|</Text>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Move</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.optionButton}>
            <Text style={styles.optionButtonText}>Copy</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
